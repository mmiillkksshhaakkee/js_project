"use strict";

// const result = confirm("Are you here?");
// console.log(typeof(result));

// const answer = prompt("Вам есть 18?", "сколько");
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Your first name?', '');
// answers[1] = prompt('Your last name?', '');
// answers[2] = prompt('Your age?', '');

function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work();