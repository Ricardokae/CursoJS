function mostraTimeAndDate() {
    let data = new Date();
   
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraTimeAndDate())
}, 1000)

setTimeout(function(){
    clearInterval(timer);
    console.log('hello')
}, 10000)