// Kurtsley 2024

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case "btn-add":
            return addNumbers(num1, num2);
        case "btn-subtract":
            return subtractNumbers(num1, num2);
        case "btn-mult":
            return multiplyNumbers(num1, num2);
        case "btn-div":
            return divideNumbers(num1, num2);
    }
}

// Layout
const keypadBox = document.querySelector("#keypad");

// Keypad buttons
for (let i = 1; i < 10; i++) {
    const key = document.createElement("div");
    key.id = "key" + i;
    key.classList.add("button");
    key.textContent = i;
    keypadBox.appendChild(key);
}

let firstNum = 0;
let secondNum = 0;
let operator = "";

// Hover
const allButtons = document.querySelectorAll(".button");

allButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#d3d3d3";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#ffffff";
    });
    button.addEventListener("mousedown", () => {
        button.style.backgroundColor = "#000000";
        button.style.color = "#ffffff";
    });
    button.addEventListener("mouseup", () => {
        button.style.backgroundColor = "#d3d3d3";
        button.style.color = "#000000";
    });
});

// Display
const keyButtons = document.querySelectorAll(".keypad-column .button");
const opButtons = document.querySelectorAll(".operator-column .button");
const display = document.querySelector("#display");

function clearDisplay() {
    if (display.textContent === 0) {
        display.textContent = "";
    }
}

displayValue = "";

keyButtons.forEach(key => {
    key.addEventListener("click", () => {
        clearDisplay();
        displayValue += key.textContent;
        display.textContent = displayValue;
    });
});

// Operator
opButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        switch (btn.id) {
            case "btn-add":
                if (num1 === 0) {
                    num1 = displayValue;
                }
                else {
                    num2 = displayValue;
                    clearDisplay();
                    display.textContent = operate(num1, btn.id, num2);
                }
        }
    });
});

