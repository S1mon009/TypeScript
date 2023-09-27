// import { activeIndex } from "../slider/moveSlider";

export function createButtons(slideButtonsLenght: number) {
  function createSlidesButtons(length: number) {
    return Array.from({ length: length }).map((item: any, index: number) => {
      return index === 0
        ? `<span class="d-block active-button"></span>`
        : `<span class="d-block"></span>`;
    });
  }
  return `<div class="position-fixed bottom-0 start-0 d-flex justify-content-between w-100 buttons"><button><i class="bi bi-caret-left-fill"></i></button><div class="d-flex align-items-center slides">${createSlidesButtons(
    slideButtonsLenght
  )}</div><button><i class="bi bi-caret-right-fill"></i></button></div>`;
}
