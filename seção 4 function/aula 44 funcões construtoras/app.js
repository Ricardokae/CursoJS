function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Ricardo', 'Bento' )
const p2 = new Pessoa('Luiz', 'Otavio' )
console.log(p1,p2)