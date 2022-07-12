const empty = "";
const symbol = "~!@#$%^&*?";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

const pLength = document.getElementById("p-length");
const pSymbol = document.getElementById("p-symbol");
const pUppercase = document.getElementById("p-uppercase");
const pLowercase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const submit = document.getElementById("sub");
const password = document.getElementById("password");

submit.addEventListener("click", () => {
    let initialPwd = empty;
    (pSymbol.checked) ? initialPwd += symbol: "";
    (pUppercase.checked) ? initialPwd += uCase: "";
    (pLowercase.checked) ? initialPwd += lCase: "";
    (pNumber.checked) ? initialPwd += number: "";

    password.value = generatePassword(pLength.value, initialPwd)
});

function generatePassword(p, initialPwd) {
    let text = "";
    for (let i = 0; i < p; i++) {
        text += initialPwd.charAt(Math.floor(Math.random() * initialPwd.length));
    }
    return text;
}

const copy = document.getElementById("copypwd");

copy.addEventListener("click", () => {
    if (password.value == "") {
        alert("Please Generate a Password");
    } else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to Clipboard");
    }
});