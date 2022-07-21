function Pessoa(nome, sobrenome){
    this.nome =nome;
    this.sobrenome =sobrenome;
    this.nomeCompleto = () => this.nome + '' + this.sobrenome
}

const pessoa1 = new Pessoa('Ricardo', 'o')
const data = new Date()
console.dir(pessoa1)
console.dir(data)