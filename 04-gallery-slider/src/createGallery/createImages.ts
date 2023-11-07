export function createImages(images: string[]) {
  return images.map((image) => {
    return `<div class="swiper-slide"><img src="/${image}"/></div>`;
  });
}
