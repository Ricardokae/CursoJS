function Produto (nome, preco, estoque) {
this.nome = nome;
this.preco = preco;

Object.defineProperty(this, 'estoque',{
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false
})

Object.defineProperties(this, {
    nome:{
        enumerable: true,
        value: nome,
        writable: false,
        configurable: false
},
    preco:{
        enumerable: true,
        value: preco,
        writable: false,
        configurable: false
}
})


}

const p1 = new Produto('Camiseta', 20, 30000)
p1.estoque = 10
console.log(p1)