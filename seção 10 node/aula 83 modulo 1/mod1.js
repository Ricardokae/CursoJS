const nome = 'Ricardo'
const sobrenome = 'Bento'

const falaNome = () =>{
    console.log(nome + sobrenome)
};

module.exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'o que eu quiser exportar';
console.log(module.exports)