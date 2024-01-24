import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import logo from "/logo-white.svg";
import { setupStartGame } from "./startGame";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<img src="${logo}" alt="Logo" class="position-absolute logo" />
<div
  class="position-absolute top-50 start-50 translate-middle rounded shadow game-area"
>
  <div
    class="w-50 h-100 float-start d-flex justify-content-center align-items-center flex-wrap rounded-start left-side side active-player"
  >
    <div class="player-name w-100 text-center fw-semibold" contenteditable="true">Player 1</div>
    <div class="score w-100 text-center fw-semibold">0</div>
    <div class="current-score w-100 d-flex justify-content-center">
      <div class="current-score-box text-center rounded">
        <span class="fs-4">Current</span><br />
        <span class="fs-2 current-score-span">0</span>
      </div>
    </div>
  </div>
  <div
    class="w-50 h-100 float-start d-flex justify-content-center align-items-center flex-wrap rounded-start right-side side"
  >
    <div class="player-name w-100 text-center fw-semibold" contenteditable="true">Player 2</div>
    <div class="score w-100 text-center fw-semibold">0</div>
    <div class="current-score w-100 d-flex justify-content-center">
      <div class="current-score-box text-center rounded">
        <span class="fs-4">Current</span><br />
        <span class="fs-2 current-score-span">0</span>
      </div>
    </div>
  </div>
  <div
    class="position-absolute top-50 start-50 translate-middle d-flex justify-content-center flex-wrap action-buttons"
  >
    <button class="btn btn-light mb-5 fs-5 restart-btn">🔄 NEW GAME</button>
    <div class="dice">
      <img src="/dice-1.png" alt="roll image" class="roll-image" />
    </div>
    <div class="d-flex justify-content-center flex-wrap mt-5">
      <button class="btn btn-light mb-2 fs-5 roll-dice-btn">🎲 ROLL DICE</button>
      <button class="btn btn-light fs-5 hold-btn">📥 HOLD</button>
    </div>
  </div>
</div>
`;

const sides = document.querySelectorAll(".side")! as NodeListOf<HTMLDivElement>;
const playerName = document.querySelectorAll(
  ".player-name"
)! as NodeListOf<HTMLDivElement>;
const restartBtn = document.querySelector<HTMLButtonElement>(".restart-btn")!;
const rollDiceBtn =
  document.querySelector<HTMLButtonElement>(".roll-dice-btn")!;
const holdBtn = document.querySelector<HTMLButtonElement>(".hold-btn")!;
const rollImage = document.querySelector<HTMLImageElement>(".roll-image")!;
const currentScores = document.querySelectorAll(
  ".current-score-span"
)! as NodeListOf<HTMLSpanElement>;
const scores = document.querySelectorAll(
  ".score"
)! as NodeListOf<HTMLDivElement>;

setupStartGame(
  sides,
  playerName,
  restartBtn,
  rollDiceBtn,
  holdBtn,
  rollImage,
  currentScores,
  scores
);
