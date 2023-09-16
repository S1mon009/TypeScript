import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { setGlassesMove } from "./glass";

const App = document.querySelector<HTMLDivElement>("#app");

// import typescriptLogo from "./typescript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.ts";

App!.innerHTML = `
<img
src="/logo-white.svg"
alt="Logo"
class="position-absolute"
/>
<div
class="position-absolute top-0 start-0 w-100 h-100 background-blur"
></div>
<div class="position-absolute d-flex justify-content-between glasses">
<div
class="glass-1"
></div>
<div
class="glass-2"
></div>
</div>
`;

const glass = document.querySelector<HTMLDivElement>(".glasses")!;
setGlassesMove(glass);
