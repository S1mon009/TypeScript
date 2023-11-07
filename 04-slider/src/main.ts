import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./style.scss";
import { createGallery } from "./createGallery/createGallery";
import { setSlider } from "./slider/setSlider";

export const images: string[] = [
  "lisbon.jpg",
  "london.jpg",
  "madrid.jpg",
  "paris.jpg",
  "rome.jpg",
  "warsaw.jpeg",
];

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `<img src="/logo-white.svg" class="position-absolute logo" alt="Logo"/>${createGallery()}`;

const slides = document.querySelectorAll<HTMLDivElement>(".slide");
const btnLeft = document.querySelector<HTMLButtonElement>(".slider-btn-left");
const btnRight = document.querySelector<HTMLButtonElement>(".slider-btn-right");
const dotContainer = document.querySelector<HTMLDivElement>(".dots");
setSlider(slides, btnLeft, btnRight, dotContainer);
