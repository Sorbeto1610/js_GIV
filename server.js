const moviesC = require("./moviecontroller");

const express = require('express');
const app = express();
const port = 3000;


app.get('/getMovies', (req, res) => {
    res.send('Hello World!')
})

app.get('/getTitleandPoster', async (req, res)=>{
    res.send(await moviesC.fetch_movies_title_poster())
})













app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


