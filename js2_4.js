function calc(num1, oper, num2) {
    let result;
    switch (oper) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("деление на 0");
                return;
            }
            break;
        default:
            console.log("ошибка");
            return;
    }
    console.log(result.toFixed(2));
}

calc(5, '+', 10);  
calc(25.5, '-', 3);  
calc(10, '*', 2.2222);  
calc(10, '/', 3);  