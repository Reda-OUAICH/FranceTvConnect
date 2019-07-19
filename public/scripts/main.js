 const welcomePage = document.querySelector("#welcomePage");
 const playerStat = document.querySelector("#playerStat");
 const body = document.querySelector('body');

 // register assistant canvas callbacks
 const callbacks = {
    onUpdate(state) {
        console.log('onUpdate', JSON.stringify(state));
        if ('Welcome' in state) {
            welcomePage.style.display = "block";
        }
        if ('LebronJames' in state) {
            playerStat.src = "./assets/imgs/lebron-stats.jpg";
        }

        if ('DurantKevin' in state) {
            playerStat.src = "./assets/imgs/durant-stats.jpg";
        }

        if ('HardenJames' in state) {
            playerStat.src = "./assets/imgs/harden-stats.jpg";
        }

        if ('DisplayChat' in state) {
            document.querySelector('h1').innerHTML = "CHAT ENABLED"
        }

        if ('HideChat' in state) {
            document.querySelector('h1').innerHTML = "CHAT ENABLED"
        }
    },
 };
 assistantCanvas.ready(callbacks);
