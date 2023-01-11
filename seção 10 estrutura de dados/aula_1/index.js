/*
//matrix
const nomes = [
    
    [
        'alex', 'dave', 'alice',
        ['ricardo', 'catarina', 'fabio',
        ['lucas', 'manuela', 'alves'],
    ]
        
    ],
    
]
console.log(nomes[0][3][3][0])
*/

//stack
class Stack{
    constructor(){
        this.data = [],
        this.top = -1
    }

    push(value){
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop(){
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peak(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}
/* 
// passo 2: utilizando

const stack = new Stack()

//adicionar dados
stack.push('learning')
stack.push('data')
stack.push('oi')
console.log(stack.peak())
//removendo dados
stack.pop()
console.log(stack.pop())
console.log(stack.peak())
*/

// passo 1: modelando
class Queue {
    constructor(){
        this.data = []
    }
    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }
    
    dequeue(){
        const item = this.data.shift()
        console.log(`${item} saiu na fila!`)
    }
}

//2: utilizando
const fila = new Queue()
/* 
fila.enqueue('maria')
fila.enqueue('joão')
fila.enqueue('catrina')
fila.dequeue()
fila.dequeue()
fila.dequeue()
*/