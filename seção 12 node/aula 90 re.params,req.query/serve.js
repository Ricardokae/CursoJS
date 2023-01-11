const express =require('express');
const app = express();

app.use(express.urlencoded( { extended: true } ))

app.get('/', (req, res) => {
res.send('Hello worldddd');
});

app.get('/teste/:idUsuarios?', (req, res) =>{
    console.log(req.params)
    res.send(req.params.idUsuarios)
})

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gent.')
})

app.listen(100,()=>{
    console.log('Acessar http://localhost:100')
})