const rand = () => Math.floor(Math.random() * 5000)

function esperaAi(msg, tempo){

    return new Promise((resolve, reject)=>{
        
    setTimeout(()=>{

       if(typeof msg !== typeof 'string'){ reject('Cai no ERRO')
        return;
    }
            resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo)
    })
}

//ALL
const promises = [
    
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    
]
/* 
//ALL
Promise.all(promises)
    .then((valor)=>{
        console.log(valor)
    })
    .catch((erro)=>{
        console.log(erro)
    })

    //RACE
    Promise.race(promises)
    .then((valor)=>{
        console.log(valor)
    })
    .catch((erro)=>{
        console.log(erro)
    })
 //resolve

  function baixarPagina(){
    const emCache = false
    if(emCache){
        return Promise.resolve('Pagina em cache')
    }else{
        return esperaAi('Baixar a página', 300)
    }
  }

  baixarPagina()
  .then((dadosPagina)=>{
    console.log(dadosPagina)
  })
  .catch(e => console.log(e));
  */
//reject
  function baixarPagina(){
    const emCache = true
    if(emCache){
        return Promise.reject('Pagina em cache')
    }else{
        return esperaAi('Baixar a página', 300)
    }
  }

  baixarPagina()
  .then((dadosPagina)=>{
    console.log(dadosPagina)
  })
  .catch(e => console.log('ERRO:',e));