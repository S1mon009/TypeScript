const password = document.querySelector(".password");
const checboxes = document.querySelectorAll(".checkbox");
const passwordLenghtInput = document.querySelector(".password-length");
const lenghtText = document.querySelector(".length");
const btnGenerate = document.querySelector(".btn-generate");
const btnCopy = document.querySelector(".btn-copy");
const icon = document.querySelector("i");
const chars = {
    az: "abcdefghijklmnopqrstuvwxyz",
    AZ: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!@#$%^&*()"
};
let options = {
    elements: [
        "a-z",
        "A-Z",
        "0-9",
        "!-@"
    ],
    length: 15
};
function generatePassword() {
    if (options.elements.length === 0) return "You must select at least one option!";
    const chooseChars = [];
    let password = [];
    if (options.elements.includes("a-z")) chooseChars.push(chars.az);
    if (options.elements.includes("A-Z")) chooseChars.push(chars.AZ);
    if (options.elements.includes("0-9")) chooseChars.push(chars.numbers);
    if (options.elements.includes("!-@")) chooseChars.push(chars.special);
    for(let i = 0; i < options.length; i++){
        const randomArrayChars = Math.floor(Math.random() * chooseChars.length);
        const lengthOfRandomArrayChars = chooseChars[randomArrayChars].length;
        const character = chooseChars[randomArrayChars][Math.floor(Math.random() * lengthOfRandomArrayChars)];
        password.push(character);
    }
    if (checkPassword(password.join(""), chooseChars)) return password.join("");
    if (!checkPassword(password.join(""), chooseChars)) generatePassword();
    return "";
}
function checkPassword(password, chooseChars) {
    let conditions = [];
    chooseChars.forEach((element)=>{
        switch(element){
            case chars.az:
                password.match(/[a-z]/g) ? conditions.push(true) : conditions.push(false);
                break;
            case chars.AZ:
                password.match(/[A-Z]/g) ? conditions.push(true) : conditions.push(false);
                break;
            case chars.numbers:
                password.match(/[0-9]/g) ? conditions.push(true) : conditions.push(false);
                break;
            case chars.special:
                password.match(/[^/w]/g) ? conditions.push(true) : conditions.push(false);
                break;
        }
    });
    if (conditions.every((elementCondition)=>elementCondition === true)) return true;
    else return false;
}
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch  {
        alert("Failed to copy: ");
    }
}
checboxes.forEach((checbox, index)=>{
    checbox.addEventListener("change", function() {
        if (!checbox.checked) {
            const value = String(checbox.dataset.option);
            const indexOfValue = options.elements.indexOf(value);
            options.elements.splice(indexOfValue, 1);
        } else if (checbox.checked) {
            const value = String(checbox.dataset.option);
            options.elements.push(value);
        }
        password.value = generatePassword();
    });
});
passwordLenghtInput?.addEventListener("input", function() {
    options.length = +this.value;
    lenghtText.innerHTML = `Length: ${this.value}`;
    password.value = generatePassword();
});
btnGenerate?.addEventListener("click", function() {
    password.value = generatePassword();
});
btnCopy?.addEventListener("click", function() {
    icon.className = "bi bi-check-lg";
    copyText(password.value);
    setTimeout(()=>{
        icon.className = "bi bi-clipboard";
    }, 1500);
});
password.value = generatePassword();

//# sourceMappingURL=index.1a755ddd.js.map
