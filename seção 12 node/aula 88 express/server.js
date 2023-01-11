const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello world!');
});

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gent.')
})

app.listen(300,()=>{
    console.log('Acessar http://localhost:300')
    console.log('Servidor executando na porta 3000')
})