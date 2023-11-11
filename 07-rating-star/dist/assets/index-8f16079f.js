(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c="/assets/logo-white-bd6cace0.svg";function n(r){const s={notActive:"bi bi-star",active:"bi bi-star-fill"};let i=null;function l(e){r.forEach((t,o)=>{e===-1&&i===null?t.className=s.notActive:o<=e||i!=null&&o<=i?t.className=s.active:t.className=s.notActive})}r.forEach((e,t)=>{e.addEventListener("mouseover",l.bind(null,t)),e.addEventListener("mouseleave",l.bind(null,-1)),e.addEventListener("click",()=>{i=t,l(-1)})})}document.querySelector("#app").innerHTML=`
  <img src=${c} alt="Logo" class="absolute top-3 left-3 w-14"/>
  <div class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-52 rounded-2xl p-5 bg-white shadow-lg sm:w-96">
   <span class="block w-full text-center text-slate-400 text-2xl">How was your experience?</span>
   <ul class="flex justify-around text-5xl w-full py-10 text-orange-500">
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
    <li class="cursor-pointer"><i class="bi bi-star"></i></li>
   </ul>
  </div>
`;n(document.querySelectorAll("i"));
