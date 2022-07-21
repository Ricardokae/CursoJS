const elementos = [
    {tag: 'p', texto: 'oi'},
    {tag: 'div', texto: 'como '},
    {tag: 'section', texto: 'vai'},
    {tag: 'footer', texto: 'Você'},
];

const container = document.querySelector('.container')

const div = document.createElement('div')


for (let i = 0; i < elementos.length; i++) {
 let {tag, texto} = elementos[i];
const tagCreated = document.createElement(tag)
tagCreated.innerText = texto;
div.appendChild(tagCreated)
 console.log(tag, texto)
}

container.appendChild(div)