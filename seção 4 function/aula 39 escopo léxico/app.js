const nome = 'Ricardo';

function falaNome () {
    const segundoNome = 'Bento'
    console.log(nome, segundoNome, );

    function falaNomeTwo () {

        const terceiroNome = 'Caetano'
        console.log(nome, segundoNome, terceiroNome)

        function falaNomeThree() {
            console.log(terceiroNome)
        }
      falaNomeThree()  
    }
   // function continuaNome (){
   //     console.log(terceiroNome)
   // }  
   // continuaNome()
   // vai dar erro pq nao existe dentro do escopo terceiro nome
    falaNomeTwo()
}
falaNome()

