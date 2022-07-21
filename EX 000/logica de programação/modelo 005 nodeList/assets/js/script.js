const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor;

for (let p of ps) {
    
    p.style.background = backgroundColorBody;
    p.style.color = '#fff';
    p.style.padding = '.5rem';
    p.style.marginBottom = '2rem';
    p.style.borderRadius = '1rem'
    p.style.fontSize = '1.7rem'
    
}