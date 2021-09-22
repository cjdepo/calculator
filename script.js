const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a*b;
}

const divide = function (a, b) {
    return a/b;
}

const operate = function (operator, a, b) {
    if (operator == 'plus') {
        return add(a, b);
    }
    else if (operator == 'minus') {
        return subtract(a,b);
    }
    else if (operator == 'multiply') {
        return multiply(a,b);
    }
    else if (operator == 'divide') {
        return divide(a,b);
    }
    else {console.log("errorrrrrrrr")}
}

const getDisplayContainer = function () {
    var display = document.querySelector("#display");
    return display;
}

const setDisplay = function (display, newDisplay) {
    display.appendChild(newDisplay);
}

const clearDisplay = function () {
    for (i = 0; i <= display.childElementCount; i++) {
        display.removeChild(display.firstChild);
    }
}

const createDisplay = function (string) {
    var display = document.createElement('div');
    display.textContent = string;
    return display;
}

displayValue = ' ';
let a = 0;
let b = 0;
let op = 0;
let decimal = false;
let num = false;
let clr = false;
let opr = false;
let eql = false;
const buttons = document.querySelectorAll('.btn');
buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        num = false;
        clr = false;
        opr = false;
        eql = false;
        if (button.id == "one") {currentInput = 1; num = true;}
        else if (button.id == "two") {currentInput = 2; num = true;}
        else if (button.id == "three") {currentInput = 3; num = true;}
        else if (button.id == "four") {currentInput = 4; num = true;}
        else if (button.id == "five") {currentInput = 5; num = true;}
        else if (button.id == "six") {currentInput = 6; num = true;}
        else if (button.id == "seven") {currentInput = 7; num = true;}
        else if (button.id == "eight") {currentInput = 8; num = true;}
        else if (button.id == "nine") {currentInput = 9; num = true;}
        else if (button.id == "zero") {currentInput = 0; num = true;}
        else if (button.id == "period") {num = true; if (!decimal) {currentInput = '.'; decimal = true;} else {currentInput = '';}}
        else if (button.id == "clear") {currentInput = ''; clr = true;}
        else if (button.id == "plus") {operator = 'plus'; opr = true;}
        else if (button.id == "minus") {operator = 'minus'; opr = true;}
        else if (button.id == "multiply") {operator = 'multiply'; opr = true;}
        else if (button.id == "divide") {operator = 'divide'; opr = true;}
        else if (button.id == "equal") {operator = 'equal'; eql = true;}
        else {"eror"}
        
        if (num) {
            
            displayValue += currentInput;
            
        }

        else if (clr) {
            a = 0;
            b = 0;
            op = 0;
            decimal = false;
            num = false;
            clr = false;
            opr = false;
            eql = false;
            displayValue = '';
            display = getDisplayContainer();
            clearDisplay(display);
            newDisplay = createDisplay(displayValue);
            setDisplay(display, newDisplay);

        }

        else if (opr) {
            a = parseFloat(displayValue);
            op = operator;
            displayValue = ' ';
            decimal = false;
        }

        else if (eql) {
            b = parseFloat(displayValue);
            result = operate(op, a, b);
            displayValue = result;
            decimal = false;
            
            
            }

        
        
        else {console.log("ErrorError")}

        

        display = getDisplayContainer();
        clearDisplay(display);
        newDisplay = createDisplay(displayValue);

        setDisplay(display, newDisplay);
        

        }
    );
}
);
