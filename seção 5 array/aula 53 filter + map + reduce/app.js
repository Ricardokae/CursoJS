const numeros = [1,2,3,45,6,7788,987,975,234,256,9,10,12];
const numerosPares = numeros.filter(e => e % 2 === 0).map(e => e * 2).reduce((ac, v) => ac + v);

console.log(numerosPares)