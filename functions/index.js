/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const functions = require('firebase-functions');
const { dialogflow, ImmersiveResponse } = require('actions-on-google');

const firebaseConfig = { projectId: 'france-tv-connect-axdfhn' };

const app = dialogflow({ debug: true });

const asks = {
    welcome: 'Pour accéder aux instructions: dites "Instructions".',
    instructions: `
        Pour voir la fiche technique d'un joueur, dites: "Fiche technique de Lebron James".
        Pour cacher la fiche technique, dites: "Cacher la fiche technique"
        
        Pour afficher le tchat, dites: "Affiche le tchat".
        Pour cacher le tchat, dites: "Cache le tchat".
    `,
    lebron: 'Voici la fiche technique de Lebron James:',
    harden: 'Voici la fiche technique de Harden James:',
    durant: 'Voici la fiche technique de Durant Kevin:',
    displayChat: 'Tchat affiché.',
    hideChat: 'Tchat caché',
    hidePlayerSheet: 'la fiche technique a été cachée'
}

const appIntent = (intent, ask, responseOptions) => app.intent(intent, conv => {
    conv.ask(ask);
    conv.ask(new ImmersiveResponse(responseOptions));
});

// ===== TEXTS =====
appIntent('Welcome', asks.welcome, {
    url: `https://${firebaseConfig.projectId}.firebaseapp.com`,
});
appIntent('Instructions', asks.instructions, {});

// ===== PLAYERS =====
appIntent('LebronJames', asks.lebron, {
    state: {
        isPlayerSheetDisplayed: true,
        LebronJames: true,
    }
});
appIntent('HardenJames', asks.harden, {
    state: {
        isPlayerSheetDisplayed: true,
        HardenJames: true,
    }
});
appIntent('DurantKevin', asks.durant, {
    state: {
        isPlayerSheetDisplayed: true,
        DurantKevin: true,
    }
});
appIntent('HidePlayerSheet', asks.hidePlayerSheet, {
    state: {
        isPlayerSheetDisplayed: false
    }
});

// ===== CHAT =====
appIntent('DisplayChat', asks.displayChat, {
    state: {
        DisplayChat: true,
        isChatDisplayed: true
    }
});
appIntent('HideChat', asks.hideChat, {
    state: {
        HideChat: true,
        isChatDisplayed: false
    }
});

// app.intent('fallback', (conv) => {
//   conv.ask(`I don't understand. You can change my color or pause spinning.`);
//   conv.ask(new ImmersiveResponse({
//     state: {
//       query: conv.query,
//     },
//   }));
// });

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
