/*
function funcao (a, b, c, d) {
    let total = 0
    for(let i of arguments){
        total += i
    }
    console.log(total, a, b, c, d)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
*/

function funcao (a, b = 2, c = 10) {
   
    console.log(a + b + c)
}

funcao(2,undefined,15 )