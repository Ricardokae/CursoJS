const numero = [5, 50, 80, 1, 2, 3, 4, 56, 90, 7, 8, 76];
const total= numero.reduce((acumulador, valor, index,array) => {
    acumulador += valor
    
    return acumulador
    
})
//console.log(total)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 132},
    {nome: 'Wallace', idade: 47},
    {nome: 'Ricardo', idade: 50},
    {nome: 'Eduardo', idade: 155}
];

const maisVelha = pessoas.reduce((c, v) =>{
    if(c.idade > v.idade) return c
    return v
})

console.log(maisVelha)



