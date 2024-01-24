import { setupInitScores } from "./init";
import { setupResetCurrentScore } from "./resetCurrentScore";
import { setupSwitchPlayer } from "./switchPlayer";

export function setupStartGame(
  sides: NodeListOf<HTMLDivElement>,
  playerName: NodeListOf<HTMLDivElement>,
  restartBtn: HTMLButtonElement,
  rollDiceBtn: HTMLButtonElement,
  holdBtn: HTMLButtonElement,
  rollImage: HTMLImageElement,
  currentScores: NodeListOf<HTMLSpanElement>,
  scores: NodeListOf<HTMLDivElement>
) {
  let activePlayer: number = 0,
    currentScoresResult: number[] = [0, 0],
    scoresResult: number[] = [0, 0],
    playing: boolean = true;

  const restartGame = () => {
    activePlayer = 0;

    sides.forEach((side, index) => {
      if (index === 0) {
        side.classList.add("active-player");
      } else {
        side.classList.remove("active-player");
      }
    });

    setupInitScores(currentScores, scores);
    scoresResult = currentScoresResult = [0, 0];

    playerName.forEach((player, index) => {
      player.textContent = `Player ${++index}`;
    });

    playing = true;
  };
  const holdScore = () => {
    scoresResult[activePlayer] += currentScoresResult[activePlayer];

    scores[activePlayer].textContent = String(scoresResult[activePlayer]);

    if (scoresResult[activePlayer] >= 100) {
      currentScoresResult = [0, 0];
      playerName[activePlayer].textContent = "Winner";
      playing = false;
    }

    currentScoresResult[activePlayer] = 0;

    if (playing) {
      setupResetCurrentScore(currentScores[activePlayer]);
      activePlayer = setupSwitchPlayer(activePlayer, sides);
    }
  };
  const roll = () => {
    if (playing) {
      const rollScore = Math.floor(Math.random() * 6 + 1);

      rollImage.src = `/dice-${rollScore}.png`;

      if (rollScore === 1) {
        setupResetCurrentScore(currentScores[activePlayer]);
        currentScoresResult = [0, 0];
        activePlayer = setupSwitchPlayer(activePlayer, sides);
        return;
      }

      currentScoresResult[activePlayer] += rollScore;
      currentScores[activePlayer].textContent = String(
        currentScoresResult[activePlayer]
      );
    }
  };

  restartBtn.addEventListener("click", restartGame);

  holdBtn.addEventListener("click", holdScore);

  rollDiceBtn.addEventListener("click", roll);
}
