//il filtre
const moviesS = require("./movieservice")


async function fetch_movies_title_poster(){

    const movies=await fetch_movies()

    const titlesAndPosters = [];
    for (const movie of movies) {
        titlesAndPosters.push({
            title: movie.title,
            poster_path: movie.poster_path
        });
    }

    return titlesAndPosters;

}


module.exports = { fetch_movies_title_poster};
module.exports = { fetch_movies };
