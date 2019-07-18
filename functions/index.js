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
    durant: 'Voici la fiche technique de Durant Kevin:'
}

const intentResponse = options => conv.ask(new ImmersiveResponse(options));

app.intent('Welcome', conv => {
    conv.ask(asks.welcome);
    intentResponse({
        url: `https://${firebaseConfig.projectId}.firebaseapp.com`,
    })
});

app.intent('LebronJames', conv => {
    conv.ask(asks.lebron);
    intentResponse({
        state: {
            LebronJames: true,
        }
    })    
});

app.intent('HardenJames', (conv) => {
    conv.ask(asks.harden);
    intentResponse({
        state: {
            HardenJames: true,
        }
    })  
});
app.intent('DurantKevin', (conv) => {
    conv.ask(asks.durant);
    intentResponse({
        state: {
            DurantKevin: true,
        }
    })  
});
  // app.intent('displayChat', (conv) => {
  //   conv.ask(`chat displayed:`);
  //   conv.ask(new ImmersiveResponse({
  //     state: {
  //       chat: true,
  //     },
  //   }
  // ));
  // });

  // app.intent('hideChat', (conv) => {
  //   conv.ask(`chat hidden:`);
  //   conv.ask(new ImmersiveResponse({
  //     state: {
  //       chat: false,
  //     },
  //   }
  // ));
  // });

// app.intent('fallback', (conv) => {
//   conv.ask(`I don't understand. You can change my color or pause spinning.`);
//   conv.ask(new ImmersiveResponse({
//     state: {
//       query: conv.query,
//     },
//   }));
// });

// app.intent('color', (conv, {color}) => {
//   if (color in tints) {
//     conv.ask(`Ok, I changed my color to ${color}. What else?`);
//     conv.ask(new ImmersiveResponse({
//       state: {
//         tint: tints[color],
//       },
//     }));
//     return;
//   }
//   conv.ask(`Sorry, I don't know that color. ` +
//     `I only know what red, blue, and green are.`);
//   conv.ask(new ImmersiveResponse({
//     state: {
//       query: conv.query,
//     },
//   }));
// });

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
