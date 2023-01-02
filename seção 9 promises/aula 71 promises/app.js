function rand(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject('Não aceitamos numeros')
        setTimeout(() => {
                resolve(msg)
            }, tempo);
    });
}

esperaAi('frase 1', rand(1,3))
    .then((resposta)=>{
        console.log(resposta);
        return esperaAi('frase 2', rand(1,3))
    })
    .then((resposta)=>{
        console.log(resposta);
        return esperaAi(22222, rand(1,3))
    })
    .then((resposta)=>{
        console.log(resposta);
        return esperaAi('frase 4', rand(1,3))
    })
    .then(resposta =>{
        console.log(resposta)
    }).catch(e => {
        console.log('ERRO:', e)
    })
    
