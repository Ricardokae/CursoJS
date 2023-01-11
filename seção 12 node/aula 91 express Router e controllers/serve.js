const express =require('express');
const app = express();
const routes = require('./router')
app.use(express.urlencoded( { extended: true } ))
app.use(routes)



app.listen(100,()=>{
    console.log('Acessar http://localhost:100')
})