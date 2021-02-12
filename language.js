input = {}

output = {}

function divideInput(type, argument) {
    input[type] = input[type].split(argument);
    output[type] = input[type];
}

function divideCommand(value, begin, end) {
    if (begin == undefined) {begin = 0}
    if (end == undefined) {end = 3}
    let result = value.substring(begin, end);
    return result;
}

function interpritateCode() {
    for (let count = 0; count < (input.code.length - 1); count++) {
        let currentCommand = divideCommand(input.code[count]);
        if (currentCommand == 'var') { 
            output.code[count] = `let ${divideCommand(input.code[count], 4, 5)};`;
        }
    }
}

function codeOutput(value) {

}