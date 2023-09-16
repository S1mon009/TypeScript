(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=s=>{const o=r=>{let i=r.clientX-s.clientWidth/2,e=r.clientY-s.clientHeight/2;s.style.left=`${i}px`,s.style.top=`${e}px`};window.addEventListener("mousemove",o.bind(event))},l=document.querySelector("#app");l.innerHTML=`
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
`;const d=document.querySelector(".glasses");c(d);
