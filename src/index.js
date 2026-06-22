export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverse(string) {
    return string.split("").reverse().join("");
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

export function caesarCipher(string, shift) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let code = string.charCodeAt(i);
        char = shiftLetter(char,code,shift);
        result += char;
    }
    return result;
}

function shiftLetter(char,code,shift) {
    if (char.match(/[a-z]/i)) {
        if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else {
            char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
    }
    return char;
};

export function analyzeArray(array) {
    if (array.length === 0) {
        return {
            average: 0,
            min: 0,
            max: 0,
            length: 0
        };
    }


    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;

    return {
        average,
        min,
        max,
        length
    };
};