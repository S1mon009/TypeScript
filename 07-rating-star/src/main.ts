import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./style.css";
import Logo from "./logo-white.svg";
import { setRating } from "./rating";
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <img src=${Logo} alt="Logo" class="absolute top-3 left-3 w-14"/>
  <div class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-52 rounded-2xl p-5 bg-white shadow-lg sm:w-96">
   <span class="block w-full text-center text-slate-400 text-2xl">How was your experience?</span>
   <ul class="flex justify-around text-5xl w-full py-10 text-orange-500">
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
   </ul>
  </div>
`;

setRating(document.querySelectorAll<HTMLElement>("i")!);
