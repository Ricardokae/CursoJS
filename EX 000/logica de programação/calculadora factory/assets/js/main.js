function creatCalc () {
    return {
        // atributos
        display : document.querySelector('.display'),
        

        inicia() {
            this.clickbotton()
            this.enter()
            
        },

        //métodos
        clickbotton() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.clearOne()
                }

                if(el.classList.contains('btn-eq')) {
                    this.result()
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
            this.display.focus()
        },

        clearDisplay() {
            this.display.value = ''
        },

        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        result() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta inválida');
                    return;
                }

                this.display.value = String(conta)
            } catch {
                alert('conta inválida');
                return;
            }
        },

        enter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.result();
                }
            })
        }
    }
}

const calculadora = creatCalc();
calculadora.inicia()