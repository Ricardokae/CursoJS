const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]
//for (const pessoa of pessoas){
//    const {id} = pessoa
//    novaPessoas[id] = {...pessoa}
//}

const novaPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa
    novaPessoas.set(id, {...pessoa});
}
console.log(novaPessoas)