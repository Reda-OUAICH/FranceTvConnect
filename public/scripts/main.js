 const welcomePage = document.querySelector('#welcomePage');
 const playerStat = document.querySelector('#playerStat');
 const chat = document.querySelector('#chat');
 const homepage = document.querySelector('.homePage');

 // register assistant canvas callbacks
 const callbacks = {    
    onUpdate(state) {
        console.log('onUpdate', JSON.stringify(state));

        if ('Welcome' in state) {
            homepage.style.display = 'block'
            playerStat.style.display = 'none';
        }

        if ('LebronJames' in state) {
            homepage.style.display = 'none'
            playerStat.style.display = 'block';
            playerStat.src = './assets/imgs/lebron-stats.jpg';
        }

        if ('DurantKevin' in state) {
            homepage.style.display = 'none'
            playerStat.style.display = 'block';
            playerStat.src = './assets/imgs/durant-stats.jpg';
        }

        if ('HardenJames' in state) {
            homepage.style.display = 'none'
            playerStat.style.display = 'block';
            playerStat.src = './assets/imgs/harden-stats.jpg';
        }

        if ('DisplayChat' in state) {
            homepage.style.display = 'none'
            chat.style.display = 'block';
            document.querySelector('h1').innerHTML = 'CHAT ENABLED'
        }

        if ('HideChat' in state) {
            chat.style.display = 'none';
            document.querySelector('h1').innerHTML = 'CHAT ENABLED'
        }
    },
 };
 assistantCanvas.ready(callbacks);
