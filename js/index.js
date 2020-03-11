let logInfo = "";
let operation = [];
let index = 0;

function handleOpClick(event) {
    event.preventDefault();
    //regex to check valid numbers
    if (/[0-9]*[.]?[0-9]+/.test(Number(document.getElementsByClassName("inputNumber")[0].value))
    && document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index++] = document.getElementsByClassName("inputNumber")[0].value;
        operation[index++] = event.target.innerText;
    } else {
        alert("Enter a valid number");
    }
    document.getElementsByClassName("inputNumber")[0].value = "";
}

document.getElementsByClassName("resetButton")[0].addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementsByClassName("inputNumber")[0].value = "";
    document.getElementById("resultValue").value = "";
});

document.getElementsByClassName("equalButton")[0].addEventListener("click", (event) => {
    event.preventDefault();
    //regex to check valid numbers
    if (/[0-9]*[.]?[0-9]+/.test(Number(document.getElementsByClassName("inputNumber")[0].value))
            && document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index] = document.getElementsByClassName("inputNumber")[0].value;
        operation = operation.join(" ");
        logInfo = `${operation} = ${eval(operation)}`;
        document.getElementById("resultValue").value = eval(operation);
        document.getElementById("logInformation").value += `${logInfo}\n`
        index = 0;
        operation = [];    
    } else {
        alert("Enter a valid number");
    }
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementById("addButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.getElementById("substractButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.getElementById("multiplicationButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.getElementById("divisionButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.addEventListener("keydown", (event) => {
    if (/[0-9]/.test(event.key) || event.key == ".") {
        if (event.key == "." && document.getElementsByClassName("inputNumber")[0].value == "") {
            document.getElementsByClassName("inputNumber")[0].value += "0";
        }
        document.getElementsByClassName("inputNumber")[0].value += event.key;
    }
    //operator control with keys
    if (event.key == "=" || event.key == "Enter") {
        document.getElementsByClassName("equalButton")[0].click();
    }
    if (event.key == "+") {
        document.getElementById("addButton").click();
    }
    if (event.key == "-") {
        document.getElementById("substractButton").click();
    }
    if (event.key == "*") {
        document.getElementById("multiplicationButton").click();
    }
    if (event.key == "/") {
        document.getElementById("divisionButton").click();
    }
    if (event.key == "Backspace") {
        if (document.getElementsByClassName("inputNumber")[0].value != "") {
            const newStr = document.getElementsByClassName("inputNumber")[0].value.slice(0, -1);
            document.getElementsByClassName("inputNumber")[0].value = newStr;
        }
    }
});