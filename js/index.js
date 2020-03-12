let operation = [];
let index = 0;

function handleOpClick(event) {
    event.preventDefault();
    //regex to check valid numbers
    if (/[-]?[0-9]*[.]?[0-9]+/.test(Number(document.getElementsByClassName("inputNumber")[0].value))
    && document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index++] = document.getElementsByClassName("inputNumber")[0].value;
        if (event.target.innerText == "–") {
            operation[index++] = "-";
        } else if (event.target.innerText == "×") {
            operation[index++] = "*";
        } else if (event.target.innerText == "÷") {
            operation[index++] = "/";
        } else {
            operation[index++] = event.target.innerText;
        }
    } else {
        alert("Enter a valid number");
    }
    document.getElementsByClassName("inputNumber")[0].value = "";
}

function handleNumClick(event) {
    document.getElementsByClassName("inputNumber")[0].value += event.target.innerText;
    let input = document.getElementsByClassName("inputNumber")[0];
    input.scrollLeft = input.scrollWidth;
}

document.getElementById("AC").addEventListener("click", (event) => {
    event.preventDefault();
    operation = [];
    index = 0;
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementById("C").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementById("equalButton").addEventListener("click", (event) => {
    event.preventDefault();
    //regex to check valid numbers
    if (/[-]?[0-9]*[.]?[0-9]+/.test(Number(document.getElementsByClassName("inputNumber")[0].value))
            && document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index] = document.getElementsByClassName("inputNumber")[0].value;
        operation = operation.join(" ");
        document.getElementsByClassName("inputNumber")[0].value = eval(operation);
        index = 0;
        operation = [];    
    } else {
        alert("Enter a valid number");
    }
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

Array.from(document.getElementsByClassName("number")).forEach(item => {
    item.addEventListener("click", (event) => {
        handleNumClick(event);
    });
});

document.getElementById("plusMinus").addEventListener("click", (event) => {
    let newStr = "";
    if (document.getElementsByClassName("inputNumber")[0].value[0] == "-") {
        newStr = document.getElementsByClassName("inputNumber")[0].value.slice(1);
        document.getElementsByClassName("inputNumber")[0].value = newStr
    } else {
        newStr = `-${document.getElementsByClassName("inputNumber")[0].value}`;
        document.getElementsByClassName("inputNumber")[0].value = newStr;
    }
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
        document.getElementById("equalButton").click();
    }
    if (event.key == "+") {
        document.getElementById("addButton").click();
    }
    if (event.key == "-") {
        if (document.getElementsByClassName("inputNumber")[0].value == "") {
            document.getElementById("plusMinus").click();
        } else {
            document.getElementById("substractButton").click();
        }
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