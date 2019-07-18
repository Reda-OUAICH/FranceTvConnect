 const welcomePage = document.querySelector("#welcomePage");
 const playerStat = document.querySelector("#playerStat");
 const body = document.querySelector('body')

 // register assistant canvas callbacks
 const callbacks = {
    onUpdate(state) {
        console.log('onUpdate', JSON.stringify(state));
        if ('LebronJames' in state) {
            playerStat.src = "../../public/assets/imgs/lebron-stats.jpg";
            body.style.background = "red"
        }
        if ('DurantKevin' in state) {
            playerStat.src = "../../public/assets/imgs/durant-stats.jpg";
            body.style.background = "green"
        }
        if ('HardenJames' in state) {
            playerStat.src = "../../public/assets/imgs/harden-stats.jpg";
            body.style.background = "blue"
        }
    },
 };
 assistantCanvas.ready(callbacks);
