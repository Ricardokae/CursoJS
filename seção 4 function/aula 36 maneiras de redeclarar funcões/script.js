// Declaração de função


function falaOi(){
    console.log('hi')
}
falaOi()

//first-class objects (objeto de primeira classes)

const falaOiTwo = function () {
console.log('hello')
}
falaOiTwo()

function wawwee (funcao) {
funcao()
}
wawwee(falaOi);

// arrow function

const ArrowFunction = () => {
console.log('sou um arrow function')
}
ArrowFunction()

// dentro de um objeto

const obj = {
    falar() {
        console.log('estou falando')
    }
}

obj.falar()