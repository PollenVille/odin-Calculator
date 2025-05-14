let currentInput = '';
let currentOperation = '';
let previousInput = '';



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

function operate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = add(prev, current);
            break;
        case '-':
            result = subtract(prev, current);
            break;
        case '*':
            result = multiply(prev, current);
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = divide(prev, current);
            break;
        // case '_':
        //     result = multiply(current, -1);
        //     break
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('cal-display').value = currentInput;
}

function operateNeg() {
    document.getElementById('cal-display').value = -currentInput;
}

function appendNumber(num) {
    currentInput += num;
    document.getElementById("cal-display").value = `${currentInput}`;
}


function appenedOperation(operation) {
    if (currentInput === '') {return}
    if (operation === '_') {
        currentInput *= -1;
    };
    if (previousInput !== '') {
        operate(); 
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('cal-display').value = `${previousInput}`;
}

function clear() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('cal-display').value = '';
}

document.getElementById("zero").onclick = () => appendNumber('0');
document.getElementById("one").onclick = () => appendNumber('1');
document.getElementById("two").onclick = () => appendNumber('2');
document.getElementById("three").onclick = () => appendNumber('3');
document.getElementById("four").onclick = () => appendNumber('4');
document.getElementById("five").onclick = () => appendNumber('5');
document.getElementById("six").onclick = () => appendNumber('6');
document.getElementById("seven").onclick = () => appendNumber('7');
document.getElementById("eight").onclick = () => appendNumber('8');
document.getElementById("nine").onclick = () => appendNumber('9');
document.getElementById("clear").onclick = () => clear();
document.getElementById("add").onclick = () => appenedOperation('+');
document.getElementById("sub").onclick = () => appenedOperation('-');
document.getElementById("divide").onclick = () => appenedOperation('/');
document.getElementById("multi").onclick = () => appenedOperation('*');
document.getElementById("equal").onclick = () => operate();
document.getElementById("point").onclick = () => {
    if (!currentInput.includes('.')) { appendNumber('.'); };
};
document.getElementById("neg").onclick = () => {
    if (!currentInput.includes('-')) { appenedOperation('_'); };
};
