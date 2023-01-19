const express = require('express')
const app = express()

app.listen(3000)

app.route('/').get( (req, res)=>{
    res.send("<h1>hello</h1>")
} )
app.route('/sobre').get( (req, res)=>{
    res.send("<h1>hello sobre</h1>")
} )
app.route('/contato').get( (req, res)=>{
    res.send("<h1>hello contato</h1>")
} )