// import { createButtons } from "./createButtons";
import { createImages } from "./createImages";
import { images } from "../main";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export function createGallery() {
<<<<<<< HEAD:04-gallery-slider/src/createGallery/createGallery.ts
  // return `<div class="position-absolute top-50 start-50 translate-middle gallery">${createImages(
  //   images
  // )}${createButtons(images.length)}</div>`;
  return `<div class="swiper mySwiper">
    <div class="swiper-wrapper">
      ${createImages(images)}
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>`;
=======
  return `<div class="position-absolute top-50 start-50 translate-middle slider">${createImages(
    images
  )}${createButtons()}</div>`;
>>>>>>> 12b05acc830634b507a5cc82bbfe040614e79f83:04-slider/src/createGallery/createGallery.ts
}
