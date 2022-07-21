function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${nome}   está ${assunto}`
        }
    }
}

const p1 = criaPessoa('Ricardo', 'bento')
console.log(p1.fala('falando de Js'))