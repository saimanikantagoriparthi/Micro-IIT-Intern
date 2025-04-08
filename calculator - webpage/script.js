let display = document.getElementById("display");

function clearDisplay() {
    display.textContent = "0";
}

function appendCharacter(char) {
    if (display.textContent === "0") {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}