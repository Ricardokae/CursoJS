const express =require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello worlddd');
});

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gent.')
})

app.listen(100,()=>{
    console.log('Acessar http://localhost:100')
})