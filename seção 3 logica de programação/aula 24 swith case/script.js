
const diaDaSemana = [
    "domingo",
    "segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    'Sábado'
]

const data = new Date();

console.log(`hoje é ${diaDaSemana[data.getDay()]}`)







/*

const data = new Date();
const diaSemana = data.getDay();

const mes = (data.getMonth()+1);

let diaSemanaTexto;
let MesTexto;



switch(diaSemana){
    case 0:
    diaSemanaTexto = 'Domingo';
    break
    case 1:
    diaSemanaTexto = 'Segunda';
    break
    case 2:
    diaSemanaTexto = 'Terça';
    break
    case 3:
    diaSemanaTexto = 'Quarta';
    break
    case 4:
    diaSemanaTexto = 'Quinta';
    break
    case 5:
    diaSemanaTexto = 'Sexta';
    break
    case 6:
        diaSemanaTexto = 'Sábado';
    break
default:
    diaSemanaTexto = 'tem parada errada ai';
    break
   
}
*/

/*
if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
}


if (mes === 1){
    MesTexto = 'Janeiro';
} else if (mes === 2) {
    MesTexto = 'Fevereiro';
} else if (mes === 3) {
    MesTexto = 'Março';
} else if (mes === 4) {
    MesTexto = 'Abril';
} else if (mes === 5) {
    MesTexto = 'Maio';
} else if (mes === 6) {
    MesTexto = 'Junho';
} else if (mes === 7) {
    MesTexto = 'Julho';
} else if (mes === 8) {
    MesTexto = 'Agosto';
} else if (mes === 9) {
    MesTexto = 'Setembro';
} else if (mes === 10) {
    MesTexto = 'Outubro';
} else if (mes === 11) {
    MesTexto = 'Novembro';
} else if (mes === 12) {
    MesTexto = 'Dezembro';
}
*/






