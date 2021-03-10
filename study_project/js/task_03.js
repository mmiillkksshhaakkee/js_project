/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

const numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? Тупо за всю жизнь", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? Тупо за всю жизнь", "");
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a, b;

// for(let i = 0; i < 2; i++){
//     a = prompt("Один из последних просмотренных фильмов?", "");
//     b = prompt("На сколько оцените его?", "");

//     if(a != null && b != null && a != '' && b != '' && a.length <= 50){
//         personalMovieDB.movies[a] = b;
//         console.log('ok');
//     } else {
//         console.log('nope');
//         i--;
//     }
// }
      

for(let i = 0; i < 2; i++){
    while(1){
        a = prompt("Один из последних просмотренных фильмов?", "");
        b = prompt("На сколько оцените его?", "");

        if(a != "" && b != "" && a != null && b != null && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('ok');
            break;
        }
        console.log('nope');
    }
}

// for(let i = 0; i < 2; i++){
//     while(1){
//         a = prompt("Один из последних просмотренных фильмов?", "");

//         if((a === "") || (a === null) || (a.length > 50)) { continue; }
//         else { 
//             break;
//         }
//     }
//     while(1){
//         b = prompt("На сколько оцените его?", "");

//         if((b === "") || (b === null) || (b.length > 50)) { continue; }
//         else {
//             break;
//         }
//     }
//     personalMovieDB.movies[a] = b;
// }

if(personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов...");
} else if(personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
    alert("Вы — классический зритель.");
} else if(personalMovieDB.count > 30){
    alert("Вы — киноман!");
} else {
    alert("Error");
}

console.log(personalMovieDB);