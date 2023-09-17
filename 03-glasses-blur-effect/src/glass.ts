export const setGlassesMove = (element: HTMLDivElement) => {
  const moveGlasses = (event: MouseEvent) => {
    let x = event.clientX - element.clientWidth / 2;
    let y = event.clientY - element.clientHeight / 2;

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  };

  window.addEventListener("mousemove", moveGlasses.bind(event));
};
