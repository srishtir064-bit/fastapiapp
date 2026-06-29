(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.getElementById("app");c.innerHTML=`
  <main>
    <h1>TalentSpark</h1>
    <p>Simple frontend starter for the FastAPI app.</p>
    <button id="loadCompanies">Load Companies</button>
    <div id="output"></div>
  </main>
`;document.getElementById("loadCompanies").addEventListener("click",async()=>{const n=document.getElementById("output");n.textContent="Loading...";try{const r=await(await fetch("/companies")).json();n.textContent=JSON.stringify(r,null,2)}catch{n.textContent="Error loading companies."}});
