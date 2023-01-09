const total = document.querySelector('#total');
const numbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const expression = document.querySelector('#Expression');
const equal = document.querySelector('#equal');

// function math(operator,a,b){
//     switch (operator.id){
//         case 'plus':
//             total = +(a) + +(b);
//             break;
//         case 'minus':
//             total = +(a) - +(b);
//             break;
//         case 'multiply':
//             if (!b){
//                 b = '1';
//             };
//             total = +(a) * +(b);
//             break;
//         case 'divide':
//             if (!b){
//                 b = '1';
//             };
//             total = +(a) / +(b);
//             break;
//     };
//     return total;
// }
total.style.cssText = "font-size: 40px;";
expression.style.cssText = "font-size: 20px;";
equal.style.cssText = "background-color: lightblue;";


let number1 = '';
let number2 = '';
let result = 0;
let firstinput = true;

total.textContent = result;

// listen for user input
numbers.forEach((number) => {
    number.style.cssText = "background-color: orange;";
    number.addEventListener('click',() =>{
        if (!firstinput){
            number2 += number.textContent;
            total.textContent = number2;
        } else {
            number1 += number.textContent;
            total.textContent = number1;
        };
    });
});

symbols.forEach((symbol) => {
    symbol.addEventListener('click',() =>{
        switch (symbol.id){
            case 'plus':
                result = +(number1) + +(number2);
                expression.textContent = `${result} ${symbol.textContent}`;
                break;
            case 'minus':
                result = +(number1) - +(number2);
                expression.textContent = `${result} ${symbol.textContent}`;
                break;
            case 'multiply':
                if (!number2){
                    number2 = '1';
                };
                result = +(number1) * +(number2);
                expression.textContent = `${result} ${symbol.textContent}`;
                break;
            case 'divide':
                if (!number2){
                    number2 = '1';
                };
                result = +(number1) / +(number2);
                expression.textContent = `${result} ${symbol.textContent}`;
                break;
            // case 'equal':
            //     display.textContent = `${result}`;
            //     break;
        };
        //check if user has put in the first input
        if (!number1){
            firstinput = true;
        } else {
            firstinput = false;
        };
        // expression.textContent = `${number1} ${symbol.textContent} ${number2}`;
        number1 = result;
        number2 = '';
        total.textContent = result;
    });
});

// equal.onclick = () => {
//     expression.textContent = `${number1} ${number2}`;
//     total.textContent = `${result}`;
// }

