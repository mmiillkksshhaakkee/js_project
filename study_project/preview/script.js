

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');
// btn.onclick = function() {
//     alert("clicked");
// };

btn.addEventListener('dblclick', () => {
    alert('double clicked');
});

btns[1].addEventListener('click', () => {
    alert('one click first listener');
});
btns[1].addEventListener('click', () => {
    alert('one click second listener');
});

// btns[2].addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     event.target.remove();
// });

btns[2].addEventListener('click', (event) => {
    btns[2].style.backgroundColor = 'blue';
});
btns[2].addEventListener('mouseout', (event) => {
    btns[2].style.backgroundColor = 'green';
});

let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if(i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
});