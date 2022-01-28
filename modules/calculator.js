class Calculator {
    #operand1;
    #operand2;
    #operation;

    set setOperand1 (value){
        const textValue = String(value);
        const valueA = Number(textValue.replace(/,/g, '.')); //regex for replacing all , with .
        if(isNaN(valueA) || value === ''){
            console.log('invalid value in operand1')
            return ('error')
        }else{
            this.#operand1 = valueA;
            return(this.#operand1);
        }
    }

    set setOperand2 (value){
        const textValue = String(value);
        const valueB = Number(textValue.replace(/,/g, '.')); //regex for replacing all , with .
        if(isNaN(valueB) || value === ''){
            console.log('invalid value in operand2')
            return ('error')
        }else{
            this.#operand2 = valueB;
            return(this.#operand2);
        }
    }

    set setOperation (operation){

        switch (operation){
            case '+':
            this.#operation = '+';
            break;
        case '-':
            this.#operation = '-';
            break;
        case '*':
            this.#operation = '*';
            break;
        case '/':
            this.#operation = '/';
            break;
        default:
            console.log('invalid operation');
            return ('error');
        }

    }

    getResult(){
        if(this.#operand1 && this.#operand2 && this.#operation){
            let result;
            switch (this.#operation){
                case '+':
                    result = this.#operand1 + this.#operand2;
                    console.log(result);
                    this.clearCalculator();
                    return(result);
                case '-':
                    result = this.#operand1 - this.#operand2;
                    console.log(result);
                    this.clearCalculator();
                    return(result);
                case '*':
                    result = this.#operand1 * this.#operand2;
                    console.log(result);
                    this.clearCalculator();
                    return(result);
                case '/':
                    result = this.#operand1 / this.#operand2;
                    console.log(result);
                    this.clearCalculator();
                    return(result);
                default:
                    console.log('wtf');
                    return ('error');
            }
            
        }else{
            console.log('one or more fields are not set');
        }
        
        
    }

    clearCalculator(){
        this.#operand1 = undefined;
        this.#operand2 = undefined;
        this.#operation = undefined;
    }
}

export{Calculator}