const rand = (min = 3, max = 5) => {
    min *= 1000
    max *= 1000
    Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo){

    return new Promise((resolve, reject)=>{
        
    setTimeout(()=>{

       if(typeof msg !== typeof 'string'){ reject('Cai no ERRO')
        return;
    };
            resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo)
    });
};
/*
esperaAi('fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2', rand());
    })
    .then(fase =>{
        console.log(fase);
        return esperaAi('fase 3', rand());
    })
    .then(fase =>{
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase:', fase)
    })
    .catch(e => console.log(e));
*/

async function execulta(){
    try {
        const fase1 = await esperaAi('fase 1', rand());
   console.log(fase1)

   const fase2 = await esperaAi('fase 2', rand());
   console.log(fase2)

   const fase3 = await esperaAi(2, rand());
   console.log(fase3)

   console.log('Terminamos na fase:', fase3)
    } catch(e){
        console.log(e)
    }
}

execulta()