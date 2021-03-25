// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () =>{
    const touchBox = document.querySelector('.box');

    touchBox.addEventListener('touchstart', (e) =>{
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    touchBox.addEventListener('touchmove', (e) =>{
        e.preventDefault();

        console.log(e.targetTouches);
        console.log(e.targetTouches[0].pageX);
    });

    touchBox.addEventListener('touchend', (e) =>{
        e.preventDefault();

        console.log('End');
    });
});