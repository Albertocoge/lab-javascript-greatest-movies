
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(movie => movie.director);

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
    return movies.filter (movie => movie.director === "Steven Spielberg" && movie.genre.includes ("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    return parseFloat(
        (
            movies.reduce((acc,movie) => movie.score || 0),0) / movies.length
         
        ).toFixed(2)

    ;
}  
  

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(movies) {
   const dramaMovies = movies.filter (movie => movie.genre.includes("Drama"));

   if (dramaMovies.length === 0) {
    return 0;
   }
   
   return parseFloat(
    (
        dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0) / dramaMovies.length
    ).toFixed(2)

   );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average


function bestYearAvg(moviesArray) {}
