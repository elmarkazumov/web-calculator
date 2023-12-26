function calc(operation, firstNumber, secondNumber){
    switch(operation){
        case 'add':
            return firstNumber + secondNumber;
        
        case 'subtract':
            return firstNumber - secondNumber;

        case 'multi':
            return firstNumber * secondNumber;

        case 'div':
            return firstNumber / secondNumber;

        default:
            return "Что-то пошло не так...";
    }
}
