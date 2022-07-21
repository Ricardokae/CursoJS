

//try{
//    console.log(naoExisto)
//} catch(error){
//    console.log('naoExiste nao existe')
//    console.log(err)
//}

const soma = (x, y) =>{
    if ( typeof x !== 'number' || typeof y !==  'number') {
        throw new ReferenceError('X E Y precisam ser numeros');
    }
    return x + y;
};
try{
console.log(soma(1,2));
console.log(soma('1',2))
}catch(error){
    console.log(error)
}