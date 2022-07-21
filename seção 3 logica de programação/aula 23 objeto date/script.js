
//const doisDia = 60 * 60 * 54 * 1000 
/*
const data = new Date(1649141554925);
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Sec', data.getSeconds())
console.log('MS', data.getMilliseconds())
console.log('Dia da semana', data.getDay())
console.log(data.toString());
console.log(Date.now())
*/



function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
const dia = zeroEsquerda(data.getDate());
const mes = zeroEsquerda(data.getMonth()+1);
const ano = zeroEsquerda(data.getFullYear());
const hora = zeroEsquerda(data.getHours());
const min = zeroEsquerda(data.getMinutes());
const seg = zeroEsquerda(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}



const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)