 let start = true;
 
 var playerStat = document.getElementById("playerStat");

 // register assistant canvas callbacks
 const callbacks = {
   onUpdate(state) {
     console.log('onUpdate', JSON.stringify(state));
     if ('LebronJames' in state) {
       playerStat.setAttribute("src", "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
       start = state.start;
     }
      if ('DurantKevin' in state) {
        playerStat.setAttribute("src", "https://pbs.twimg.com/media/C2_0eG6W8AANfbk.jpg");
        start = state.start;
      }
       if ('HardenJames' in state) {
         playerStat.setAttribute("src", "https://assets.sport.francetvinfo.fr/sites/default/files/styles/large_16_9/public/2019-01/063_1124314324.jpg?h=20a5823a&itok=Q3H0PKq_");
         start = state.start;
       }
   },
 };
 assistantCanvas.ready(callbacks);
