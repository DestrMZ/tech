const numnerOfFilms = +prompt("Сколько фильмов Вы уже посмотрели? : ", '');

const personalMovieDB = {
    count: numnerOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt("Один из последних фильмов, что вы просмотрели?", ''),
      b = prompt('На сколько вы можете оценить этот фильм, от 0 до 10?', ''),
      c = prompt("Один из последних фильмов, что вы просмотрели?", ''),
      d = prompt('На сколько вы можете оценить этот фильм, от 0 до 10?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);