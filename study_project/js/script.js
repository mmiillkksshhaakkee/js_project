"use strict";

// const result = confirm("Are you here?");
// console.log(typeof(result));

// const answer = prompt("Вам есть 18?", "сколько");
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Your first name?', '');
// answers[1] = prompt('Your last name?', '');
// answers[2] = prompt('Your age?', '');

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },

//     makeTest: function(){
//         console.log("Test");
//     }
// };

// options.makeTest();
// // ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);

// let counter = 0;

// for (let key in options){
//     // if(typeof(options[key]) === 'object'){
//     //     for(let i in options[key]){
//     //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     //         counter++;
//     //     } 
//     // } else {
//     //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     //}
    
// }

// console.log(counter);

/* let someObj = {
    a: 2,
};
 
  let obj = Object.create(someObj, { 
    b: {
      value: 2,  
    },
    c: {
      value: 3,
      enumerable: true,  
    },
  });
  
  let objCopy = Object.assign({}, obj);
  console.log(objCopy); // { c: 3 }

  let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(someObj));

  console.log(JSON.stringify(Object.getOwnPropertyDescriptors(obj), null, 2 ));
  */

/* var v1 = '123';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo')

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
console.log(obj); // { "0": "1", "1": "2", "2": "3" } */

const soldier = {
    health: 400,
    armor: 100
};

const john = Object.create(soldier);
console.log(john.armor); // где дескрипторы свойств???