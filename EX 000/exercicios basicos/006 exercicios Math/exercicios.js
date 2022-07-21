const numero = Number(prompt('Digite um número'));

const numeroTitulo = document.getElementById('numero-titulo');

const text = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ' '
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p> `
texto.innerHTML += `<p>${numero} é intero: ${Number.isInteger(numero)}</p> `
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p>arredondando para baixo ${Math.floor(numero)}</p> `
texto.innerHTML += `<p>arredondando para cima ${Math.ceil(numero)}</p> `
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}</p> `

