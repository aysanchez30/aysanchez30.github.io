const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

const showMovies = async () => {
    const movies = await getMovies();
    const movieList = document.getElementById("movies");
    movies.forEach((movie)=> {
        movieList.append(getMovieInfo(movie));
    });
};

const getMovieInfo = (movie) => {
    const section = document.createElement("section");

    const container1 = document.createElement("div"); 
    const container2 = document.createElement("div");
    container2.className = "container2"; 

    const h2 = document.createElement("h2");
    h2.innerHTML = movie.title; 

    const director = document.createElement("p");
    director.innerHTML = `<strong>Director: </strong> ${movie.director}`;

    const actors = document.createElement("p");
    actors.innerHTML = `<strong>Actor: </strong> ${movie.actors}`;

    const year = document.createElement("p");
    year.innerHTML = `<strong>Year: </strong> ${movie.year}`;

    const genres = document.createElement("p");
    genres.innerHTML = `<strong>Genres: </strong> ${movie.genres}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${movie.description}`;

    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/${movie.img}`;

    section.appendChild(h2);
    section.appendChild(container1); 
    section.appendChild(container2); 

    container1.appendChild(img);

    container2.appendChild(h2);
    container2.appendChild(director);
    container2.appendChild(actors);
    container2.appendChild(year);
    container2.appendChild(genres);
    container2.appendChild(description);

    return section; 
};

window.onload = () => {
    showMovies();
}
