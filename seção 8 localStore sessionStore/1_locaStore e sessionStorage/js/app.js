/*
//1 - inserir dados
localStorage.setItem('name', "Ricardo");

//2 - resgatar dados
const name = localStorage.getItem('name');
console.log(name);


//4 - regate de item que não existe
const lastName = localStorage.getItem('lastname');
console.log(lastName);
if(!lastName){
    console.log('sem sobrenome');
};

// 5 - remover item
localStorage.removeItem('name');

// 6 - limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

localStorage.clear();
*/

//7 - session storage

sessionStorage.setItem("number", 123);

//8 - reiniciar e perde dados
const n = sessionStorage.getItem("number");
console.log(n);


//9 - salvar objetos

const person = {
    name: 'Ricardo',
    age: 19,
    job: 'nenhum'
}

localStorage.setItem("person", JSON.stringify(person))
// 10 - resgatar objeto
const getPerson = localStorage.getItem('person')

const personObject = JSON.parse(getPerson)

console.log(personObject.name)
console.log(personObject.age)
console.log(personObject.job)
