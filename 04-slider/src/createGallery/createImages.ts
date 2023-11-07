export function createImages(images: string[]) {
  return images.map((image) => {
    return `<div class="position-absolute top-0 d-flex align-items-center justify-content-center w-100 h-100 slide"><img src="/${image}" class="w-100 h-100 object-fit-cover" alt="${image}"/></div>`;
  });
}
