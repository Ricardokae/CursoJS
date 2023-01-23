const express = require('express')
const app = express()

//middleware
app.use(express.json())


app.listen(3000)





/* DELETE
let author = "Ricardo"

app.route('/:id').delete( (req, res) => {
    author = ""
    res.send(req.params.id)
})
*/

/* PUT
let author = "Ricardo"

app.route('/').get((req,res) => res.send(author))

app.route('/').put( ( req, res ) => {
    author = req.body.author
    res.send(author)
} )

*/

/* POST
app.route('/').post( ( req, res )=> res.send(req.body))
*/

/* GET

(app.route('/').get( (req, res)=>{
    res.send("<h1>hello</h1>")
} )
app.route('/sobre').get( (req, res)=>{
    res.send("<h1>hello sobre</h1>")
} )
app.route('/contato').get( (req, res)=>{
    res.send("<h1>hello contato</h1>")
} )
*/