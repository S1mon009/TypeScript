import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./style.scss";
import { createGallery } from "./createGallery/createGallery";
import { arrowMoveSlide } from "./slider/moveSlider";

export const images: string[] = [
  "lisbon.jpg",
  "london.jpg",
  "madrid.jpg",
  "paris.jpg",
  "rome.jpg",
  "warsaw.jpeg",
];
// export let activeIndex: number = 0;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = createGallery();

arrowMoveSlide(
  document.querySelectorAll<HTMLButtonElement>("button"),
  document.querySelectorAll<HTMLSpanElement>("span"),
  document.querySelectorAll<HTMLImageElement>("img")
);
