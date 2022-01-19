const btns = document.querySelectorAll("button");
const display = document.querySelector(".screen");

for (let button of btns) {
    button.addEventListener("click", function () {
        if (button.innerText == "=") {
            display.innerText = (eval(display.innerText));
        } else if (button.innerText == "C") {
            display.innerText = "";
        } else {
            display.innerText += button.innerText;
        }
    })
}

document.body.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "Backspace":
            let str = display.innerText;
            display.innerText = str.substring(0, str.length - 1);
            break;
        case "Shift": // Do nothing
            break;
        case "Enter":
        case "=":
            display.innerText = (eval(display.innerText));
            break;
        case "c":
            display.innerText = "";
            break;
        default:
            display.innerText += e.key;
            break;
    }
})