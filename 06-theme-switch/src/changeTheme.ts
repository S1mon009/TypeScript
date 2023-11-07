import LogoWhite from "./logo-white.svg";
import LogoBlack from "./logo-black.svg";

export function setupTheme(
  inputElement: HTMLInputElement | any,
  imageElement: HTMLImageElement | any
) {
  inputElement.addEventListener("change", () => {
    if (inputElement.checked) {
      document.documentElement.classList.add("dark");
      imageElement.src = LogoWhite;
    } else {
      document.documentElement.classList.remove("dark");
      imageElement.src = LogoBlack;
    }
  });
}
