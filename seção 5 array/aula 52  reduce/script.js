let nome = 'Ricardo'
const nome2 = 'Bento'

function nomes () {
    nome2 ='Caetano'
    let nome = 'Rodolfo'
    console.log(nome, nome2)
    function nomeTwo () {
        nome2 = 'Otavio'
        console.log(nome2, nome)
        
    }
nomeTwo()
}
nomes()

function nomeThree(){
    console.log(nome, nome2)
}
nomeThree()
