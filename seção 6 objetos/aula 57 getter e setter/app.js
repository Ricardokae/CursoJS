function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
     let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
       
        get: function(){
            return estoquePrivado
        },
        set: function (valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Erro')
            }
            estoquePrivado = valor
        }
    })
    
   
  
    }
    
    const p1 = new Produto('Camiseta', 20, 30000)
    p1.estoque = 10
    console.log(p1.estoque)