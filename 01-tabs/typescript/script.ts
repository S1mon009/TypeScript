const buttons = document.querySelectorAll<HTMLButtonElement>("button");
const tabs = document.querySelectorAll<HTMLDivElement>(".tab-data");
let activeTab: number = 0;

function changeActiveTab(id: number) {
  buttons.forEach((button: HTMLButtonElement, index: number) => {
    if (id === activeTab) {
      return;
    } else if (index == id) {
      button.classList.add(<string>"active");
      tabs[index].classList.remove(<string>"d-none");
    } else {
      button.classList.remove(<string>"active");
      tabs[index].classList.add(<string>"d-none");
    }
  });
  activeTab = id;
}

buttons.forEach((button: HTMLButtonElement, index: number) => {
  button.addEventListener("click", changeActiveTab.bind(null, index));
});
