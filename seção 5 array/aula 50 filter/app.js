const numero = [5, 50, 80, 1, 2, 3, 4, 56, 90, 7, 8, 76];
const numeroFiltrados = numero.filter( valor => valor > 10);
//console.log(numeroFiltrados)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    {nome: 'Ricardo', idade: 50},
    {nome: 'Eduardo', idade: 55}
];

const filterNomeIdade = pessoas.filter(obj => obj.nome.length >= 5 && obj.idade >= 50)
const TerminaComA =pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(filterNomeIdade, TerminaComA)