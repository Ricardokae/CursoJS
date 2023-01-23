const express = require('express')
const app = express()

//middleware
app.use(express.json())


app.listen(3000)

app.route('/').post( (req, res) => {
    const {nome, cidade, livros} = req.body
    res.send(`
    <h1>Meu nome é "${nome}"<br> E minha cidade é "${cidade}"</h1> <br>
    <h2>meu livro favorite é "${livros[2]}"</h2>
    `)
})



