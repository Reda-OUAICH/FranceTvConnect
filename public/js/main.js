 let start = true;
 let lebron = true;
 let durant = true;
 let harden = true;

 var playerStat = document.getElementById("playerStat");
 // register assistant canvas callbacks
 const callbacks = {
   onUpdate(state) {
     console.log('onUpdate', JSON.stringify(state));
     if ('LebronJames' in state) {
       playerStat.src = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
       lebron = state.lebron;
     }
      if ('DurantKevin' in state) {
        playerStat.src = "https://pbs.twimg.com/media/C2_0eG6W8AANfbk.jpg";
        durant = state.durant;
      }
       if ('HardenJames' in state) {
         playerStat.src = "https://assets.sport.francetvinfo.fr/sites/default/files/styles/large_16_9/public/2019-01/063_1124314324.jpg?h=20a5823a&itok=Q3H0PKq_";
         harden = state.harden;
       }
   },
 };
 assistantCanvas.ready(callbacks);
