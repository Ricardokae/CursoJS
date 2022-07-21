function criaMultiplicador (multiplicador) {
return function(n) {
    return n * multiplicador
};
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log(duplica(10))
console.log(triplica(20))
console.log(quadruplica(30))