const numero = [5, 50, 80, 1, 2, 3, 4, 56, 90, 7, 8, 76];
const NumeroEmDobro = numero.map(valor => valor * 2)
//console.log(NumeroEmDobro)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Ricardo', idade: 50},
    {nome: 'Eduardo', idade: 55}
];

const RetornaNomes = pessoas.map(obj => obj.nome.split(' '))
const RetornaIdade = pessoas.map(obj => ({idade: obj.idade}))
const id = pessoas.map((obj, index)=>{
    obj.id = (index + 1 *10000);
    return obj
})
console.log(id)
