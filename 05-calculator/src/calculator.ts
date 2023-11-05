import { evaluate } from "mathjs";

export function setupCalculator(element: HTMLDivElement | null) {
  var resultCalculate: string = "";

  element?.addEventListener("click", (event: any) => {
    var result: any = element.firstElementChild?.firstElementChild;
    var eventValue = event.target.textContent;

    switch (eventValue) {
      case "AC":
        result.value = resultCalculate = "";
        break;
      case "=":
        result.value = evaluate(resultCalculate);
        break;
      case "+":
        result.value += `+`;
        resultCalculate += ` + `;
        break;
      case "-":
        result.value += `-`;
        resultCalculate += ` - `;
        break;
      case "x":
        result.value += `*`;
        resultCalculate += ` * `;
        break;
      case "/":
        result.value += `/`;
        resultCalculate += ` / `;
        break;
      default:
        result.value += eventValue;
        resultCalculate += eventValue;
        break;
    }
  });
}
