 var welcomePage = document.getElementsByClassName("welcomePage");
 var playerStat = document.getElementById("playerStat");

 // register assistant canvas callbacks
 const callbacks = {
    onUpdate(state) {
        console.log('onUpdate', JSON.stringify(state));
        if ('LebronJames' in state) {
            playerStat.src = "public/img/lebronStat.png";
        }
        if ('DurantKevin' in state) {
            playerStat.setAttribute("src", "https://pbs.twimg.com/media/C2_0eG6W8AANfbk.jpg");
        }
        if ('HardenJames' in state) {
            playerStat.setAttribute("src", "https://assets.sport.francetvinfo.fr/sites/default/files/styles/large_16_9/public/2019-01/063_1124314324.jpg?h=20a5823a&itok=Q3H0PKq_");
        }
    },
 };
 assistantCanvas.ready(callbacks);
