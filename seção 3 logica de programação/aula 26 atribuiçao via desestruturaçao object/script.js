const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:30,
    endereco: {
        rua: 'Av Brasil',
        numero:320
    }
}

const { nomePrimario = 'nao existe', nome, sobrenome, idade} = pessoa;
const {endereco: {rua, numero}} = pessoa

/*
console.log('sou',  nome, sobrenome,'tenho', idade,  'anos')
console.log(rua, numero)
*/
console.log(nomePrimario)