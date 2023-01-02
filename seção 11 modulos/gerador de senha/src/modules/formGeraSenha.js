import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkminusculas = document.querySelector('.chk-minusculas')
const chknumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

export default () =>{
   gerarSenha.addEventListener('click', () =>{
    senhaGerada.innerHTML = gera();
   })
};

function gera (){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkminusculas.checked,
        chknumeros.checked,
        chkSimbolos.checked,
        );
 return senha || 'Nada selecionado';
}