const characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:'\",.<>/?`~"; 
const listLength = characterList.length;

function applyCipher(text, num) { 
    
    if (isNaN(num)) {
        return "ERROR: Invalid Shift Number.";
    }

    const finalShift = num; 
    let result = "";
    
    const effectiveShift = (finalShift % listLength + listLength) % listLength;

    for (const char of text) {
        const charIndex = characterList.indexOf(char);

        if (charIndex === -1) {
            result += char;
        } else {
            const newIndex = (charIndex + effectiveShift) % listLength;
            result += characterList[newIndex];
        }
    }
    
    return result;
}

function processCipher(operation) {
    const inputElement = document.getElementById('inputText');
    const shiftElement = document.getElementById('shift');

    const inputText = inputElement.value;
    let shiftNum = parseInt(shiftElement.value);

    if (operation === 'decrypt') {
        shiftNum = -shiftNum;
    }

    const cipheredText = applyCipher(inputText, shiftNum);

    document.getElementById('outputText').value = cipheredText;
}
