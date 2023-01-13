function dados(dado){
console.log(dado())
}

dados(function (){
    return 'ola mundo'
})