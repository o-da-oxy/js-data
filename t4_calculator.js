function calc(num1, operator, num2){
    if (operator == '+'){
        return num1 + num2;
    }
    if (operator == '-'){
        return num1 - num2;
    }
    if (operator == '/'){
        return num1 % num2;
    }
    if (operator == '*'){
        return num1 * num2;
    }
}
console.log(calc(25.5, '-', 3).toFixed(2));