function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1 = [];
let num2 = [];
let operator = '';

function operate(num1, oper, num2) {
    switch (oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}


const display = document.querySelector("#cal-display");
let displayText = display.textContent;
let textArr = [];

function updateDisplayText() {
    displayText = textArr.join("");
    display.textContent = displayText;
}

function updateArr(num) {
    if (textArr.length < 29) {
        switch (num) {
            case '-':
                if (!textArr.includes('-')) {
                    textArr.unshift('-');
                }
                break;
            case '.':
                if (!textArr.includes('.')) {
                    textArr.push('.');
                }
                break;
            default:
                textArr.push(num);
                break;
        }
   }
}

function clear() {
    textArr.splice(0,);
}



function getDigits(oper) {
    num2 = display.textContent;
    num1 = operate(num1, oper, num2);
    // updateDisplay("c");
    updateDisplay(num1);
}


document.getElementById("zero").onclick = () => {
    updateArr('0');
    updateDisplayText();
};
document.getElementById("one").onclick = () => {
    updateArr('1');
    updateDisplayText();
};
document.getElementById("two").onclick = () => {
    updateArr('2');
    updateDisplayText();
};
document.getElementById("three").onclick = () => {
    updateArr('3');
    updateDisplayText();
};
document.getElementById("four").onclick = () => {
    updateArr('4');
    updateDisplayText();
};
document.getElementById("five").onclick = () => {
    updateArr('5');
    updateDisplayText();
};
document.getElementById("six").onclick = () => {
    updateArr('6');
    updateDisplayText();
};
document.getElementById("seven").onclick = () => {
    updateArr('7');
    updateDisplayText();
};
document.getElementById("eight").onclick = () => {
    updateArr('8');
    updateDisplayText();
};
document.getElementById("nine").onclick = () => {
    updateArr('9');
    updateDisplayText();
};
document.getElementById("paren-open").onclick = () => {
    updateArr('(');
    updateDisplayText();
};
document.getElementById("paren-close").onclick = () => {
    updateArr(')');
    updateDisplayText();
};
document.getElementById("clear").onclick = () => {
    clear();
    updateDisplayText();
};
document.getElementById("add").onclick = () => {
    operator = '+';

    num2 = textArr.join("");
    console.log(num2);
    clear();
    updateDisplayText();
    num1 = operate(num1, operator, num2);
    
    updateArr(num1);
    
};
document.getElementById("neg").onclick = () => {
    updateArr('-');
    updateDisplayText();
};
document.getElementById("point").onclick = () => {
    updateArr('.');
    updateDisplayText();
};
