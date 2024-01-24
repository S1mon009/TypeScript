export function setupSwitchPlayer(
  playerNumber: number,
  sides: NodeListOf<HTMLDivElement>
): number {
  let returnPlayerNumber: number | null;

  playerNumber === 0 ? (returnPlayerNumber = 1) : (returnPlayerNumber = 0);

  sides.forEach((side) => {
    side.classList.toggle("active-player");
  });

  return returnPlayerNumber;
}
