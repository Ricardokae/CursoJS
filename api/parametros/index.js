const express = require('express')
const app = express()

//middleware
app.use(express.json())


app.listen(3000)


app.route('/').get((req, res)=> res.send(req.query.nome))


app.route('/about/user').get((req, res)=> res.send(req.query))


/* params
app.route('/').get( (req,res)=> res.send("oi"))
app.route('/:nome').get( (req,res)=> res.send(req.params.nome))
app.route('/identidade/:nome').get( (req,res)=> res.send(req.params.nome))
*/

/* body
app.route('/').post( (req, res) => {
    const {nome, cidade, livros} = req.body
    res.send(`
    <h1>Meu nome é "${nome}"<br> E minha cidade é "${cidade}"</h1> <br>
    <h2>meu livro favorite é "${livros[2]}"</h2>
    `)
})

*/



