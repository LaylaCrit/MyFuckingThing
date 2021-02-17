let currentValue = {
    console: "",
}

let isOn = {
    sin: true,
}

function changeValue(id, value) {
    document.getElementById(id).innerHTML = 
    `<input type="text" value="${value}" 
        onchange="changeValue('debugInput', this.value)">`;
    currentValue.console = value;
}

function logg(id) {
    console.log(document.getElementById(id).value);
}

function getText(id) {
    currentValue[id] = document.getElementById(id).value;
}

function pasteText(id, input) {
    document.getElementById(id).innerHTML = input;
}

function lg(id) {
    console.log(id);
} 


function langInput(inputValue, type) {
    input[type] = inputValue;
}

//function buttonInput(id, type, argument) {
//  getText(id);
//    input[type] = currentValue[id];
//    divideInput(type, argument);
//    interpritateCode();
//    codeOutput('new');
//    pasteText('paste', output.code);
//}