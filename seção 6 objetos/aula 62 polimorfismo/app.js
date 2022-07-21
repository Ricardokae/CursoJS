function Conta (agencia, conta, saldo) {
this.agencia = agencia;
this.conta = conta;
this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return ;
    }
    this.saldo -= valor;
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`ag/c:${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
    ContaCorrente.prototype = Object.create(Conta.prototype);
    ContaCorrente.prototype.constructor = ContaCorrente

    ContaCorrente.prototype.sacar = function(valor){
        if(valor > this.saldo + this.limite){
            console.log(`Saldo insuficiente: ${this.saldo}`)
            return ;
        }
        this.saldo -= valor;
        this.verSaldo()
    }


    function ContaPoupança(agencia, conta, saldo, limite){
        Conta.call(this, agencia, conta, saldo);
        this.limite = limite;
    }
    ContaPoupança.prototype = Object.create(Conta.prototype);
    ContaPoupança.prototype.constructor = ContaPoupança

    const cc = new ContaCorrente(12,33, 0, 100)
    const cp = new ContaPoupança(12,33, 0)
    
    cc.depositar(10)
    cc.sacar(110)
    cc.sacar(1)
console.log()
    cp.depositar(10)
    cp.sacar(110)
    cp.sacar(1)