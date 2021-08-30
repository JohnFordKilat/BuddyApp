"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number: ');
    var operator = (0, readline_sync_1.question)('Enter operator: ');
    var secondStr = (0, readline_sync_1.question)('Enter second number: ');
    var isValid = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (isValid) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("The result of the equation is " + result);
    }
    else {
        console.log('Input is invalid');
        main();
    }
}
function calculate(first, op, second) {
    var x;
    switch (op) {
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
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
