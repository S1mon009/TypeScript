export function createImages(images: string[]) {
  return images.map((image) => {
    return `<img src="/${image}" class="position-absolute start-0 w-100" lazy/>`;
  });
}
