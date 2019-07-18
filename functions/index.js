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

const firebaseConfig = {
    projectId: 'france-tv-connect-axdfhn'
};

const app = dialogflow({ debug: true });

app.intent('Welcome', conv => {
    conv.ask('Bienvenue sur FranceTV Connect ! Dites "Instructions" pour plus d"information ');
    conv.ask(new ImmersiveResponse({
        url: `https://${firebaseConfig.projectId}.firebaseapp.com`,
    }));
});

app.intent('LebronJames', conv => {
    conv.ask(`Voici les informations sur Lebron James !`);
    conv.ask(new ImmersiveResponse({
        url: `https://${firebaseConfig.projectId}.firebaseapp.com`,
        state: {
            start: true,
        },
    }));
});

app.intent('HardenJames', (conv) => {
    conv.ask(`Voici les informations sur Harden James !`);
    conv.ask(new ImmersiveResponse({
        url: `https://${firebaseConfig.projectId}.firebaseapp.com`,
        state: {
            start: true,
        },
    }));
});
app.intent('DurantKevin', (conv) => {
    conv.ask(`Voici les informations sur Kevin Durant !`);
    conv.ask(new ImmersiveResponse({
        url: `https://${firebaseConfig.projectId}.firebaseapp.com`,
        state: {
            durant: true,
        },
    }));
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
