 var welcomePage = document.getElementsByClassName("welcomePage");
 var playerStat = document.getElementById("playerStat");

 // register assistant canvas callbacks
 const callbacks = {
    onUpdate(state) {
        console.log('onUpdate', JSON.stringify(state));
        if ('LebronJames' in state) playerStat.src = "../../public/assets/imgs/lebron-stats.jpg";
        if ('DurantKevin' in state) playerStat.src = "../../public/assets/imgs/durant-stats.jpg"
        if ('HardenJames' in state) playerStat.src = "../../public/assets/imgs/harden-stats.jpg"
    },
 };
 assistantCanvas.ready(callbacks);
