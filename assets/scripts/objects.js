const addMovieBtn = document.getElementById('add-movie-btn');
const searchFilterBtn = document.getElementById('search-btn');
const movies = [];

const addMovieHandler = ()=>{
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    const newMovie = {
        info:{
            title,
            [extraName]:extraValue
        },
        id:Math.random(),
    }
    movies.push(newMovie);
    console.log(movies);

}

addMovieBtn.addEventListener('click',addMovieHandler);