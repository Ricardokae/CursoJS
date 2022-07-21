function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    
//const pessoa1 = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome =form.querySelector('.nome');
        const sobrenome =form.querySelector('.sobrenome');
        const idade =form.querySelector('.idade');
        const peso =form.querySelector('.peso');
        const altura =form.querySelector('.altura');
        

       let pessoa1 = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: idade.value,
        peso: peso.value,
        altura: altura.value,

    };
    
        console.log(pessoa1);
        
        resultado.innerHTML += `<p>Meu nome é ${pessoa1.nome} ${pessoa1.sobrenome} e minha idade é ${pessoa1.idade} e meu peso é ${pessoa1.peso}kg e minha altura é${pessoa1.altura}M e meu IMC é de ${Number(pessoa1.peso / pessoa1.altura**2).toFixed(2)}</p>`;
    }



   
  form.addEventListener('submit', recebeEventoForm);
  
}

meuEscopo()