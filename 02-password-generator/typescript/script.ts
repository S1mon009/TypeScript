const password = document.querySelector(".password") as HTMLInputElement;
const checboxes = document.querySelectorAll<HTMLInputElement>(".checkbox");
const passwordLenght =
  document.querySelector<HTMLInputElement>(".password-length");
const btnGenerate = document.querySelector<HTMLButtonElement>(".btn-generate");
const btnCopy = document.querySelector<HTMLButtonElement>(".btn-copy");
const icon = document.querySelector("i") as HTMLElement;
interface Chars {
  az: string;
  AZ: string;
  numbers: string;
  special: string;
}
interface Options {
  elements: string[];
  length: number;
}
const chars: Chars = {
  az: "abcdefghijklmnopqrstuvwxyz",
  AZ: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!@#$%^&*()",
};
let options: Options = {
  elements: ["a-z", "A-Z", "0-9", "!-@"],
  length: 15,
};
function generatePassword(): string {
  if (options.elements.length === 0) {
    return "You must select at least one option!";
  }

  const chooseChars: string[] = [];
  let password: string[] = [];

  if (options.elements.includes("a-z")) {
    chooseChars.push(chars.az);
  }
  if (options.elements.includes("A-Z")) {
    chooseChars.push(chars.AZ);
  }
  if (options.elements.includes("0-9")) {
    chooseChars.push(chars.numbers);
  }
  if (options.elements.includes("!-@")) {
    chooseChars.push(chars.special);
  }

  for (let i: number = 0; i < options.length; i++) {
    const randomArrayChars: number = Math.floor(
      Math.random() * chooseChars.length
    );
    const lengthOfRandomArrayChars: number =
      chooseChars[randomArrayChars].length;
    const character: string =
      chooseChars[randomArrayChars][
        Math.floor(Math.random() * lengthOfRandomArrayChars)
      ];

    password.push(character);
  }

  if (checkPassword(password.join(""))) {
    return password.join("");
  }
  if (!checkPassword(password.join(""))) {
    generatePassword();
  }

  return "Your password";
}
function checkPassword(temporaryPassword: string): boolean {
  let conditions: boolean[] = [];

  if (temporaryPassword.match(/[a-z]/g)) {
    conditions.push(true);
  }
  if (temporaryPassword.match(/[A-Z]/g)) {
    conditions.push(true);
  }
  if (temporaryPassword.match(/[0-9]/g)) {
    conditions.push(true);
  }
  if (temporaryPassword.match(/[^\w ]/g)) {
    conditions.push(true);
  }
  if (conditions.every((conditionsElement) => conditionsElement === true)) {
    return true;
  } else {
    return false;
  }
}
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    alert("Failed to copy: ");
  }
}

checboxes.forEach((checbox: HTMLInputElement, index: number) => {
  checbox.addEventListener("change", function () {
    if (!checbox.checked) {
      const value: string = String(checbox.dataset.option);
      const indexOfValue = options.elements.indexOf(value);
      options.elements.splice(indexOfValue, 1);
    } else if (checbox.checked) {
      const value: string = String(checbox.dataset.option);
      options.elements.push(value);
    }
    password.value = generatePassword();
  });
});

passwordLenght?.addEventListener("input", function () {
  options.length = +this.value;
  password.value = generatePassword();
});

btnGenerate?.addEventListener("click", function () {
  password.value = generatePassword();
});

btnCopy?.addEventListener("click", function () {
  icon.className = "bi bi-check-lg";
  copyText(password.value);
  setTimeout(() => {
    icon.className = "bi bi-clipboard";
  }, 1500);
});

password.value = generatePassword();
