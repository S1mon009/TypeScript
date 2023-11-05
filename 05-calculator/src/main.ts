import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Logo from "./logo-white.svg";
import { setupCalculator } from "./calculator.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <img src=${Logo} alt="Logo" class="position-absolute"/>
  <div class="position-absolute top-50 start-50 translate-middle calculator">
    <div class="result">
      <input type="text" id="inputResult" class="bg-transparent text-end" readonly/>
    </div>
    <div class="row">
      <button class="btn btn-secondary col fs-5">AC</button>
      <button class="btn btn-secondary col fs-5">(</button>
      <button class="btn btn-secondary col fs-5">)</button>
      <button class="btn btn-secondary col fs-5">/</button>
    </div>
    <div class="row">
      <button class="btn btn-secondary col fs-5">7</button>
      <button class="btn btn-secondary col fs-5">8</button>
      <button class="btn btn-secondary col fs-5">9</button>
      <button class="btn btn-secondary col fs-5">x</button>
    </div>
    <div class="row">
      <button class="btn btn-secondary col fs-5">4</button>
      <button class="btn btn-secondary col fs-5">5</button>
      <button class="btn btn-secondary col fs-5">6</button>
      <button class="btn btn-secondary col fs-5">-</button>
    </div>
    <div class="row">
      <button class="btn btn-secondary col fs-5">1</button>
      <button class="btn btn-secondary col fs-5">2</button>
      <button class="btn btn-secondary col fs-5">3</button>
      <button class="btn btn-secondary col fs-5">+</button>
    </div>
    <div class="row">
      <button class="btn btn-secondary col fs-5">.</button>
      <button class="btn btn-secondary col fs-5">0</button>
      <button class="btn btn-warning col fs-5">=</button>
    </div>
  </div>
`;
setupCalculator(document.querySelector<HTMLDivElement>(".calculator"));
