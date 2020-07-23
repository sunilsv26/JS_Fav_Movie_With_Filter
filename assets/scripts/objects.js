const addMovieBtn = document.getElementById("add-movie-btn");
const searchFilterBtn = document.getElementById("search-btn");
const movies = [];
const movieRender = (filter = '') => {
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";
  const filterdedMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

   filterdedMovies.forEach((movie)=>{
        const movieEl = document.createElement('li');
        let text = movie.info.title + '-';
            for(const key in movie.info){
                if(key !== 'title'){
                    text = text + `${key}:${movie.info[key]}`
                }
            }
    movieEl.textContent = text
    movieList.append(movieEl);
    })

  /* for (const movie of filterdedMovies) {
    const movieEl = document.createElement("li");
    let text = movie.info.title + "-";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}:${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  } */
};
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(movies);
  movieRender();
};

const searchMovieHandler = () => {
  filterTerm = document.getElementById("filter-title").value;
  movieRender(filterTerm);
};
addMovieBtn.addEventListener("click", addMovieHandler);
searchFilterBtn.addEventListener("click", searchMovieHandler);
