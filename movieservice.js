// Il recupere

const fetch = require("node-fetch");

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTdlODYyMTlhYmM4ZjIxM2E5MzllNzgwOTU2Nzg1NCIsInN1YiI6IjY1ZWRhNGZiOGNmY2M3MDE0YTYyNDg2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdmQE-jU5x3Lyfrxs8Mwh11jRDQcEPITvVyT2j6Dys0'
    }
};


async function fetchMovieList() {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
}

// const main = async () => {
//     const moviesData = await fetch_movies();
//     console.log(moviesData); // This will be the parsed JSON data of movie information.
// };
//
// main();

module.exports = {fetchMovieList};