export function arrowMoveSlide(
  arrowButtons: NodeListOf<HTMLButtonElement>,
  slideButtons: NodeListOf<HTMLSpanElement>,
  images: NodeListOf<HTMLImageElement>
) {
  let activeIndex: number = 0,
    currentIndex: number = 0;
  function slide(index: number) {
    images.forEach((image, imageIndex) => {
      image.style.transform = `translateX(${-100 * index}%)`;
    });
    activeIndex = currentIndex;
  }

  arrowButtons.forEach((button, index) => {
    console.log(button);
    button.addEventListener("click", function () {
      if (index === 0)
        currentIndex = currentIndex === 0 ? currentIndex : --currentIndex;
      if (index === 1)
        currentIndex =
          currentIndex === images.length ? currentIndex : ++currentIndex;

      slide(currentIndex);
      console.log(currentIndex);
    });
  });
}
