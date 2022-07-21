function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

function Camiseta (nome, preco, cor, estoque) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.estoque = estoque
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material
    this.estoque = estoque;
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor =Caneca
const camiseta = new Camiseta('Regata', 7.5, 'Preta', 60 );
const caneca = new Caneca('Chicara', 5, 'Porcelana', 100 )

camiseta.aumento(100)
caneca.aumento(100)
console.log(camiseta);
console.log(caneca);