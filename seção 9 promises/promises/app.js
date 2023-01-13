const aceitar = false

console.log('pedir Uber')

const promessa = new Promise((resolve, reject)=>{
    if(aceitar === true){
        return resolve('Pedido Aceito!')
    }
    return reject('Pedido Negado')
})

console.log('aguardando')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(()=> console.log('finalizada'))

