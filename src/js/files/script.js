// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

 const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '') //+ переводим значение в числовое

  const personalMovieDB = {
  count: numberOfFilms, //задание объекта ключ:свойство
  movies:{},
  actors:{}, //пустой объект
  genres:[], //пустой массив
  privat:false //тут не ставим ничего
}; //тут ставим ;

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''), //,
      d = prompt('На сколько оцените его?', ''); //;


personalMovieDB.movies[a] = b; //получаем такие данные: {movies:logan: '8', flash: '6'}
personalMovieDB.movies[c] = d;  //используем [] а не .

console.log(personalMovieDB);





