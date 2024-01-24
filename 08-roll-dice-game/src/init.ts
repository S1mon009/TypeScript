export function setupInitScores(
  currentScores: NodeListOf<HTMLSpanElement>,
  scores: NodeListOf<HTMLDivElement>
) {
  currentScores.forEach((currentScore) => {
    currentScore.textContent = "0";
  });
  scores.forEach((score) => {
    score.textContent = "0";
  });
}
