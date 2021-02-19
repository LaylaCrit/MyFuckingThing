let currentValue = {
    console: "",
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

function pasteText(id, input, mod) {
    let mode = (mod == 'code');
    let out = input;
    if (mode) {
        for (count = 0; count <= 5; count++) {
            if (input[count] != undefined) {
                out = `Output ${count} = ${input[count]}`
            }
        }
    }
    document.getElementById(id).innerHTML = out;
}

function lg(id) {
    console.log(id);
} 


function langInput(inputValue, type) {
    input[type] = inputValue;
}

function divideInput(type, argument) {
    input[type] = input[type].split(argument);
    output[type] = input[type];
}

function buttonInput(id, type, argument) {
 getText(id);
   input[type] = currentValue[id];
   divideInput(type, argument);
   interpritateCode();
   let str = codeOutput();
   selfm(str);
   pasteText('paste', output.task, 'code');
}