input = {
    task : []
}

output = {
    task : []
}

function selfm(str) {
    this.print = eval("(function a() {" + str + "})");
    this.print();
}

function taskInput(inp) { // inp - номер входа
    res = input.task[inp];
    return res;
}

function taskOutput(out, value) {    // out - номер выхода
    output.task[out] = value;
}

function interpritateCode() {
    for (let count = 0; count < (input.code.length - 1); count++) {
        let currentCommand = (input.code[count].substring(0, 3));
        if (currentCommand == 'var') { 
            output.code[count] = `let ${input.code[count].substring(4, 5)};`;
        }
        if (currentCommand.substring(1, 3) == ':=') {
            output.code[count] = `${currentCommand.substring(0, 1)} = ${
                input.code[count].substring(4)};`;
        }
        if (currentCommand == 'inp') {  // inp {arg} {variable}
            let arg = input.code[count].substring(4, 5);
            let variable = input.code[count].substring(6, 7);
            output.code[count] = `${variable} = taskInput(${arg});`;
        }
        if (currentCommand == 'out') {  // out {arg} {variable}
            let arg = input.code[count].substring(4, 5);
            let variable = input.code[count].substring(6, 7);
            output.code[count] = `taskOutput(${arg}, ${variable});`;
        }
    }
}

function interpritateCodeByCommand() {
    // for (let count = 0; count < (input.code.length - 1); count++) {
    //     let currentCommand = (input.code[count].substring(0, 3));
    //     if (currentCommand == 'var') {
    //         output.code[count] = `let ${input.code[count].substring(4, 5)}`;
    //     }
    //     if (currentCommand.substring(1, 3) == ':=') {
    //         output.code[count] = `${currentCommand.substring(0,1)} = ${
    //             input.code[count].substring(4)}`;
    //     }
    // }
}

function codeOutput() {
    let str = '';
    //document.getElementById(value).innerHTML = '';
    for (let count = 0; count < (output.code.length - 1); count++) {
    str += `${output.code[count]}\n`; 
    }
    //str += '\n}';
    console.log(str);
    return str
}

function startDebug() {
    for (let count = 0; count < (output.code.length - 1); count++) {
        let command = output.code[count];
        selfm(`${command}`);
    }
}