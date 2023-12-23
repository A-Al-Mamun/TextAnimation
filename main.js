let target = document.getElementsByClassName('text-second')[0];

setInterval( () => {
    setTimeout( () => {
        target.textContent = "Developer"
    }, 0);
    setTimeout( () => {
        target.textContent = "Designer"
    }, 4000);

    setTimeout( () => {
        target.textContent = "Youtuber"
    }, 8000);

}, 12000)