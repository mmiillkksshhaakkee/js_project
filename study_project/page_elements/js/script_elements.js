'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'orange';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('me experimental text here');

div.classList.add('black');

//document.body.append(div);
//document.body.appendChild(div);

//document.querySelector('.wrapper').append(div);
wrapper.append(div);

//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);
//wrapper.insertBefore(div, hearts[1]);

//circles[0].remove();
//wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>html code</h1>";

//div.textContent = "only text";

div.insertAdjacentHTML("afterend", '<h1>hello html code</h1>');