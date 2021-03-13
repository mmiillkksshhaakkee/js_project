/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? Тупо за всю жизнь", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? Тупо за всю жизнь", "");
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,

    toggleVisibleMyDB() {
        if(!this.private){
            this.private = true;
        } else {
            this.private = false;
        }
    }
};

let a, b;

/* for(let i = 0; i < 2; i++){
    a = prompt("Один из последних просмотренных фильмов?", "");
    b = prompt("На сколько оцените его?", "");

    if(a != null && b != null && a != '' && b != '' && a.length <= 50){
        personalMovieDB.movies[a] = b;
        console.log('ok');
    } else {
        console.log('nope');
        i--;
    }
} */
/* for(let i = 0; i < 2; i++){
    while(1){
        a = prompt("Один из последних просмотренных фильмов?", "");

        if((a === "") || (a === null) || (a.length > 50)) { continue; }
        else { 
            break;
        }
    }
    while(1){
        b = prompt("На сколько оцените его?", "");

        if((b === "") || (b === null) || (b.length > 50)) { continue; }
        else {
            break;
        }
    }
    personalMovieDB.movies[a] = b;
}
*/

personalMovieDB.rememberMyFilms = function(){
    for(let i = 0; i < 2; i++){
        while(1){
            a = prompt("Один из последних просмотренных фильмов?", "");
            b = prompt("На сколько оцените его?", "");
    
            if(a != "" && b != "" && a != null && b != null && a.length <= 50) {
                personalMovieDB.movies[a] = b;
                //console.log('ok');
                break;
            }
            //console.log('nope');
        }
    }
};

personalMovieDB.detectPersonalLevel = function(){
    if(personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов...");
    } else if(personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
        alert("Вы — классический зритель.");
    } else if(personalMovieDB.count > 30){
        alert("Вы — киноман!");
    } else {
        alert("Error");
    }
};

personalMovieDB.showMyDB = function(){
    personalMovieDB.toggleVisibleMyDB();
    
    if(personalMovieDB.private === false){
        console.log(personalMovieDB);
    } else {
        console.log("Database is hidden");
    }
};

personalMovieDB.writeYourGenres = function(arr){
    // for(let i = 0; i < 3; i++){
    //     arr[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
    //     if(arr[i] == null || arr[i] == '') i--;
    // }

    for(let j = 0; j < 1; j++){
        let genre = prompt(`Введите ваши любимые жанры через запятую`, '').toLowerCase();

        if(genre == null || genre == '') { j--; }
        else {
            personalMovieDB.genres = genre.split(", ");
            personalMovieDB.genres.sort();
        }
    }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} — это ${item}`);
    });
};