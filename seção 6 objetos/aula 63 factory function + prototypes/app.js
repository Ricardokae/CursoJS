function criaPessoa(nome, sobrenome){

    const pessoaPrototype = {
    falar(){
        console.log(`${this.nome} esta falando`)
    },
    comer(){
        console.log(`${this.nome} esta comendo`)
    },
    beber(){
        console.log(`${this.nome} esta bebendo`)
    }
}

return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
})
}

const p1 =criaPessoa('Ricardo', 'Bento')
const p2 =criaPessoa('B', 'F')
const p3 =criaPessoa('C', 'G')
const p4 =criaPessoa('D', 'H')
const p5 =criaPessoa('E', 'I')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)