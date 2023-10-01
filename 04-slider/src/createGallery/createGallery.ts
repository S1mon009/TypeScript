import { createButtons } from "./createButtons";
import { createImages } from "./createImages";
import { images } from "../main";
export function createGallery() {
  return `<div class="position-absolute top-50 start-50 translate-middle slider">${createImages(
    images
  )}${createButtons()}</div>`;
}
