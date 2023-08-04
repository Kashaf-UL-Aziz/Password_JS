const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()*+,-./:;<=>?";



const PassBox = document.getElementById("mainInput");
const totalChar = document.getElementById("pass-Input");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numberCase = document.getElementById("number-case");
const symbolCase = document.getElementById("symbol-case");




const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if (upperCase.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerCase.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberCase.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolCase.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length < totalChar.value) {
        return generatePassword(password);
    }
    PassBox.value = truncateString(password, totalChar.value);
    console.log(truncateString(password, totalChar.value));
}

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }
)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}