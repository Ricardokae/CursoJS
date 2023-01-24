const express = require('express')
const axios = require('axios')
const app = express()

//middleware
app.use(express.json())


app.listen(3000)


app.route('/').get((req, res)=> {
    axios.get("https://api.github.com/users/ricardokae")
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error))
})









