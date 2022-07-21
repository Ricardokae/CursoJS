function meuEscopo() {
    const form = document.querySelector("form")
    const resultado = document.querySelector(".resultado")
   
    // const pessoas = [];
   
    function recebeEventForm(event) {
      event.preventDefault();
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
   
      let pessoal = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
      }
      console.log(pessoal)
      resultado.innerHTML += `<p>Meu nome e ${pessoal.nome} ${pessoal.sobrenome} e meu peso e ${pessoal.peso} minha altura e ${pessoal.altura}</p>`;
    }
   
    form.addEventListener('submit', recebeEventForm);
  }
  meuEscopo();