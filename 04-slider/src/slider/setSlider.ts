import { images } from "../main";
export function setSlider(
  slides: NodeListOf<HTMLDivElement>,
  btnLeft: HTMLButtonElement | null | any,
  btnRight: HTMLButtonElement | null | any,
  dotContainer: HTMLDivElement | null | any
) {
  let currentSlide = 0;
  const maxSlide = images.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}"></button>`
      );
    });
  };
  const activateDot = function (slideIndex: number) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot: any) => dot.classList.remove("dots-dot-active"));

    document
      .querySelector<HTMLButtonElement | null | any>(
        `.dots-dot[data-slide="${slideIndex}"]`
      )
      .classList.add("dots-dot-active");
  };
  const goToSlide = function (slideIndex: number) {
    slides.forEach(
      (slide: HTMLDivElement, index: number) =>
        (slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`)
    );
  };
  const nextSlide = function () {
    currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  const prevSlide = function () {
    currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (event: KeyboardEvent) {
    if (event.key === "ArrowLeft") prevSlide();
    event.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (event: any) {
    if (event.target.classList.contains("dots-dot")) {
      const { slide } = event.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
