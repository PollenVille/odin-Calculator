let currentInput = '';
let currentOperation = '';
let previousInput = '';
let isResultDisplayed = false;

/************************************************************************ 
        Calculator functions for Add, substract, multiply, and divide
    Method to switch between equation functions based on operations type
*************************************************************************/
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
            console.log(`This is previous input ${previousInput}`);
            console.log(`This is current input ${currentInput}`);
            result = add(prev, current);
            console.log(`This is the result ${result}`);
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
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('cal-display').value = currentInput;

    isResultDisplayed = true; // Set the flag to indicate a result was just displayed
}


function appendNumber(num) {
/*********************************************************** 
    Mehthod used to update currentInput with given number.
    Update calculator display with new input
************************************************************/
    if (isResultDisplayed) {
        // Clear the result if a number is entered after a calculation
        currentInput = '';
        isResultDisplayed = false; // Reset the flag
    }
    currentInput += num;
    document.getElementById("cal-display").value = `${currentInput}`;
}



function appenedOperation(operation) {
/************************************************ 
    Mehthod used to call continous operations.
*************************************************/
    if (currentInput === '') { return }

    if (isResultDisplayed) {
        // Do not clear the result if an operator is entered after a calculation
        isResultDisplayed = false; // Reset the flag
    }

    if (operation === '_') {
        currentInput *= -1;
        console.log(currentInput);
        previousInput = currentInput;
        document.getElementById('cal-display').value = `${previousInput}`;
        return
    }
    if (previousInput !== '') {
        operate(); 
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('cal-display').value = `${previousInput}`;
}


function clear() {
/********************************** 
    Clears all inputs and displays
***********************************/
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
