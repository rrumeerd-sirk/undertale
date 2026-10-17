(function(){
    'use strict';

    const heart = document.querySelector('.heart');

    let x = 35;
    let y = 25;
    let keyState = {};

    document.addEventListener(
        'keydown',
        (event)=>{
            keyState[event.keyCode || event.which] = true;
        }
    );

    document.addEventListener(
        'keyup',
        (event)=>{
            keyState[event.keyCode || event.which] = false;
        }
    );

    (function gameLoop() {
        if (x > 0 && (keyState[37] || keyState[81])){
            x -= 0.4;
        }

        if (x < 73.1 && (keyState[39] || keyState[68])){
            x += 0.4;
        }

        if (y > 0 && (keyState[38] || keyState[90])) {
            y -= 0.4;
        }

        if (y < 53 && (keyState[40] || keyState[83])) {
            y += 0.4;
        }

        heart.style.top = y + "vh";
        heart.style.left = x + "vh";

        setTimeout(gameLoop, 10)
    })()
})();
