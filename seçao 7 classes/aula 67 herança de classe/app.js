class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ja ligado')
            return;
        }
        this.ligado = true
    }

    desligado() {
        if(!this.ligado){
            console.log(this.nome +  ' ja desligado')
            return;
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome)
        this.cor;
    }
}

const s1 = new Smartphone('iPhone')

console.log(s1)