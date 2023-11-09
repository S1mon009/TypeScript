import "./style.css";
import LogoBlack from "./logo-black.svg";
import { setupTheme } from "./changeTheme";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <img src=${LogoBlack} alt="Logo" class="absolute top-3 left-3 w-14"/>
  <div class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-28 rounded-full border-8 border-slate-800 p-2 duration-300 dark:border-white dark:bg-indigo-500">
      <span class="absolute left-2 duration-300 block w-20 h-20 rounded-full bg-slate-800 dark:translate-x-36 dark:bg-white"></span>
      <input type="checkbox" class="w-64 h-28 rounded-full opacity-0 cursor-pointer"/>
  </div>
`;

setupTheme(
  document.querySelector<HTMLInputElement>("input"),
  document.querySelector<HTMLImageElement>("img")
);
