import { question } from 'readline-sync';

type Operator = '+' | '-' | '/' | '*';

function main(): void
{
    const firstStr: string = question('Enter first number: ');
    const operator: string = question('Enter operator: ');
    const secondStr: string = question('Enter second number: ');

    const isValid: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if(isValid)
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(`The result of the equation is ${result}`);

    }
    else
    {
        console.log('Input is invalid');
        main(); 
    }
}

function calculate(first: number, op: Operator, second: number): number
{
    let x: number;
    switch(op)
    {
        case '+':
            x = first + second;
            return x;
        case '*':
            x = first + second;
            return x;
        case '-':
            x = first - second;   
            return x; 
        case '/':
            x = first / second;   
            return x;   
    }
}

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        default:
            return false;    
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

main();