const display2 = document.querySelector('#display2');
const numbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const display1 = document.querySelector('#display1');
const equal = document.querySelector('#equal');
const clearbtn = document.querySelector("#clearbutton");
const delbutton = document.querySelector('#deletebutton');

display2.style.cssText = "font-size: 40px;";
display1.style.cssText = "font-size: 20px;";


let number1 = '';
let number2 = '';
let result = null;
let firstinput = true;
let havedot = false;
let lastoperation = '';

// listen for user input
numbers.forEach((number) => {
    number.style.cssText = "background-color: rgba(128, 212, 191, 0.753);";
    number.addEventListener('click',() =>{
      firstinput = false;
      if (number.textContent === '.' && !havedot){
        havedot = true;
      } else if (number.textContent === '.' && havedot){
        return;
      }
      number2 += number.textContent;
      display2.textContent = number2;
    });
});

symbols.forEach((symbol) => {
    // symbol.style.cssText = 'background-color: rgba(128, 212, 191, 0.753);'
    symbol.addEventListener('click',() =>{
        const operationname = symbol.id;
        if (!number1 && !number2){
          // if user has not put anything
          return
        } else if (number2 === '') {
          // if user keep pressing a symbol
          alert('Please type in your next number');
          return;
        };

        havedot = false;
        if (number1 && number2){
          //do math ops on previous saved operation
          mathoperation();
        } else {
          //get the result = last input of user
          result = parseFloat(number2);
        }
        clearVar(operationname);
        lastoperation = operationname;
        console.log(result);
    });
});

equal.addEventListener('click', (e) =>{
  // if user has not put anything
  if (!number1 && !number2) {
    return;
  } else if (!number2) {
    // when user press an operator and hit equal
    firstinput = false;
    // result = first part of number1 string
    result = parseFloat(number1.substring(0, number1.indexOf(' ')));
    havedot = false;
    clearVar();
    display2.innerHTML = result;
    number2 = result;
    number1 = '';
    return
  } else if (!number1){
    // when user hit = , number1 becomes empty so nothing happen if they keep hitting =
    return;
  } else if (number1 && number2){
    //if both number 1 & 2 present, perform everything below
    firstinput = false;
    havedot = false;
    mathoperation();
    clearVar();
    display2.innerHTML = result;
    number2 = result;
    number1 = '';
  };
});

clearbtn.addEventListener('click', (e) => {
  display1.textContent = '';
  display2.textContent = '';
  number1 = '';
  number2 = '';
  result = null;
  firstinput = true;
});

delbutton.addEventListener('click', () =>{
  console.log(typeof(number2));
  if (!number2){
    return
  };
  // number2 = number2.substring(0, number2.length -1);
  number2 = number2.slice(0, -1);
  display2.textContent = number2;
});
// function to bring up last result to display1, then clear display2
function clearVar(operator = ''){
  number1 = '';
  number1 += result + ' ' + operator + ' ';
  display1.innerHTML = number1;
  display2.innerHTML = '';
  number2 = '';
};

function mathoperation(){
  if (lastoperation === '*'){
    result = parseFloat(result) * parseFloat(number2);
  } else if (lastoperation === '+'){
    result = parseFloat(result) + parseFloat(number2);
  } else if (lastoperation === '-'){
    result = parseFloat(result) - parseFloat(number2);
  } else if (lastoperation === '/'){
    result = parseFloat(result) / parseFloat(number2);
  }
}