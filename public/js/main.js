 let start = true;
 var playerStat = document.getElementById("playerStat");
 // register assistant canvas callbacks
 const callbacks = {
   onUpdate(state) {
     console.log('onUpdate', JSON.stringify(state));
     if ('start' in state) {
       playerStat.src = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
       start = state.start;
     }
   },
 };
 assistantCanvas.ready(callbacks);
