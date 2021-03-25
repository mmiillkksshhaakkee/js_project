/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // #удаление рекламных блоков
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          promoName = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list');
    
    const add = document.querySelector('form.add'), //берем форму
          //btnConfirm = add.querySelector('button'),
          input = add.querySelector('.adding__input'),  // берем поле ввода
          //trashCans = movieList.querySelectorAll('.delete'),
          check = add.querySelector('[type="checkbox"]');   // берем чекбокс формы
    
    add.addEventListener('submit', (e) => { // навешиваем обработчик на форму и событие сабмита данных
        e.preventDefault();

        let newMovie = input.value;
        const favorite = check.checked;

        if(newMovie){
            if(newMovie.length > 21){
                newMovie = newMovie.slice(0, 22);
                newMovie += "...";

                //newMovie = `${newMovie.substring(0, 22)}...`;
            }
    
            movieDB.movies.push(newMovie);
            sortArray(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);

            if(favorite){
                console.log("Добавляем новый фильм!");
            }

            e.target.reset();   // сброс поля ввода
        }
        
    });
    //console.log(adv.length);
    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());

        // adv.forEach(function(item) {item.remove();});
    };

    const makeChanges = () => {
        // #изменение жанра фильма
        promoName.textContent = 'ДРАМА';
        
        // #изменение постера
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArray = (arr) => {
        arr.sort();
    };
    // ^^^ сортировка массива фильмов (на случай если будет не простая сортировка а что-то еще)

    function createMovieList(films, parent) {
        parent.innerHTML = "";  // очистка родительской верстки, удаление всех фильмов из списка

        sortArray(films);       // сортировка массива с фильмами заново

        films.forEach((film, i) => {    // добавление кода для каждого фильма в списке
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // обработчик для мусорных корзин
        document.querySelectorAll('.delete').forEach((trashCan, i) => {
            trashCan.addEventListener('click', () => {
                trashCan.parentElement.remove();    // удаление фильма (родителя) из списка
                movieDB.movies.splice(i, 1);        // удаление фильма из массива базы данных

                createMovieList(films, parent);     // создание списка заново
            });

        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
    // 
    /* #1 & #2
    btnConfirm.addEventListener('click', (e) => {
        e.preventDefault();
        let inputStr = input.value;
        let j = movieDB.movies.length;
    
        if(input.value.length > 21){
            inputStr = input.value.slice(0, 22);
            inputStr += "...";
        }
        movieDB.movies.push(inputStr);
        movieDB.movies.sort();
        movieList.innerHTML += `
            <li class="promo__interactive-item">${j + 1}. ${inputStr}
                <div class="delete"></div>
            </li>
        `;
        j++;
    
        if(check.checked){
            console.log("Добавляем любимый фильм");
        }
        input.value = "";
        console.log(movieDB.movies);
    });
    
    // #3
    function deleteMovie = (e) => {
        console.log(e.currentTarget.parentElement);
        e.currentTarget.parentElement.remove();
        console.log(movieDB.movies);
    };
    
    trashCans.forEach(trashCan => {
        trashCan.addEventListener('click', deleteMovie);
    });
    */

});

