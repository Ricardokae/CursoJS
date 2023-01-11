const express =require('express');
const app = express();
const routes = require('./router');
const path = require('path');


app.use(express.urlencoded( { extended: true } ))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(routes);



app.listen(100,()=>{
    console.log('Acessar http://localhost:100');
})