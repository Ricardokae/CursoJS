
const dataMostrar = DataCompleta();
const horarioMostrar = horaAtual();

const msg = `${dataMostrar} <br/> ${horarioMostrar}`;

function DataCompleta(){
const data = new Date();
const dia = data.getDay();
const diaText = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();

let diaDaSemana;
let mesDoAno;

switch(dia){
    case 0:
        diaDaSemana = 'Domingo';
        break;

    case 1:
        diaDaSemana = 'Segunda-Feira';
        break;

    case 2:
        diaDaSemana = 'Terça-Feira';
        break;

    case 3:
        diaDaSemana = 'Quarta-Feira';
        break;

    case 4:
        diaDaSemana = 'Quinta-Feira';
        break;
            
    case 5:
        diaDaSemana = 'Sexta-Feira';
        break;

    case 6:
        diaDaSemana = 'Sabado';
        break;
}

switch(mes){
    case 1:
        mesDoAno = 'Janeiro';
        break;
    
    case 2:
        mesDoAno = 'Fevereiro';
        break;
            
    case 3:
        mesDoAno ='Março';
        break;

    case 4:
        mesDoAno = 'Abril';
        break;

    case 5:
        mesDoAno = 'Maio';
        break;
    
    case 6:
        mesDoAno = 'Junho';
        break;
        
    case 7:
        mesDoAno = 'Julho';
        break;
        
    case 8:
        mesDoAno = 'Agosto';
        break;

    case 9:
        mesDoAno = 'Setembro';
        break;

    case 10:
        mesDoAno = 'Outubro';
        break;

    case 11:
        mesDoAno = 'Novembro';
        break;

    case 12:
        mesDoAno = 'Dezembro';
        break;

}
const msgData = `${diaDaSemana}, ${diaText} de ${mesDoAno} de ${ano}`;
return msgData;
}

function horaAtual(){
    const hora = new Date();
    const horarioHora = hora.getHours();
    const horarioMinutos = hora.getMinutes();
    const msgHora = `${horarioHora}:${horarioMinutos}`;
    return msgHora;
   
}


function CriarElemento(){
    const elemento = document.createElement('elemento');
    return elemento;
}


function MostrarHorario(){
    const h1 = document.querySelector('.home .container .box h1');
    h1.innerHTML = '';
 
    const elemento = CriarElemento(); 
 
    elemento.innerHTML = msg;
    h1.appendChild(elemento);
}
 
MostrarHorario();