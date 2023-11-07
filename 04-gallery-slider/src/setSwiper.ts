import { Swiper } from "swiper/types";
export function setSwiper() {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}
