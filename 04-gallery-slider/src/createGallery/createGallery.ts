// import { createButtons } from "./createButtons";
import { createImages } from "./createImages";
import { images } from "../main";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export function createGallery() {
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
}
