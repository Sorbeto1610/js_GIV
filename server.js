const Koa = require('koa');
const {fetchMovieList} = require("./movieservice");
const app = new Koa();
const port = 3000;


// app.get('/getMovies', (req, res) => {
//     res.send('Hello World!')
// })
//
// app.get('/getTitleandPoster', async (req, res)=>{
//     res.send(await moviesC.fetch_movies_title_poster())
// })

app.use(  async(ctx) => {
    console.log(ctx)


    console.log('qwewqe');
    ctx.body = JSON.stringify(await fetchMovieList());
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log('zxc');


