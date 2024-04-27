"use strict";(self.webpackChunkplanner=self.webpackChunkplanner||[]).push([[841],{214:(e,s,r)=>{r.d(s,{A:()=>a});var A=r(43),o=r(579);const a=e=>{const[s,r]=(0,A.useState)(!1),a={backgroundColor:s?e.hoverColor:e.color};return(0,o.jsx)("button",{style:a,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"buttonStyle",onClick:e.onClick,children:e.text})}},94:(e,s,r)=>{r.d(s,{A:()=>a});var A=r(43),o=r(579);const a=e=>{let{onInputChange:s}=e;const r=(0,A.useRef)(null),a=()=>{s(r.current.value)};return(0,A.useEffect)((()=>{const e=r.current;return e.addEventListener("input",a),()=>{e.removeEventListener("input",a)}}),[]),(0,o.jsx)("input",{className:"searchBar",ref:r,type:"text"})}},713:(e,s,r)=>{r.d(s,{V:()=>o,W:()=>a});var A=r(401);const o=e=>A.oR.success(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),a=e=>A.oR.warn(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},841:(e,s,r)=>{r.r(s),r.d(s,{default:()=>h});var A=r(475);var o=r(579);const a=e=>(0,o.jsxs)("div",{className:"headerCategory",children:[(0,o.jsx)("h2",{children:e.headline}),(0,o.jsx)(A.N_,{to:"/",children:(0,o.jsx)("div",{className:"headerCategory__button",children:(0,o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAQCAYAAADj5tSrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACmSURBVHgBvdQ9DsMgDAVgO0h0go2lU07TqVO33jO3gi5k4GehOKqQ0ipdwHkD8vZJ5gHAQUoplxDCDAMyHQAq5/wQQtzqPMNo5APcEVHVeXXOvaAz+A/w3i/GmBU6g9xAQziBDeEGNiSl9CQAGDPBCUFrrdJat3VJKZc6j10XHdxQqzAntHuMXNDu4qm6VGECCKJq11lCZ37a9Q3FGK/AFVrdqK/+DVFOoab4ruN9AAAAAElFTkSuQmCC",alt:"arrow"})})})]});var t=r(43),n=r(713);const l=r.p+"static/media/404.9119b2c56740a78623462c090038899d.svg",i=e=>(0,o.jsxs)("div",{className:"errorCategory",children:[(0,o.jsx)("img",{src:l,alt:"404 Error"}),(0,o.jsxs)("h1",{children:["Brak takiej kategorii ",(0,o.jsx)("span",{children:e.urlError}),". Popraw sw\xf3j url."]})]});var c=r(214),d=r(94),u=r(216);const g=e=>{var s;let r=(0,u.Zp)();const[A,a]=(0,t.useState)(),l=()=>JSON.parse(localStorage.getItem("categories")),[g,h]=(0,t.useState)(l),[m,C]=(0,t.useState)((()=>null===g?[]:[...g])),j=null===g||void 0===g?void 0:g.findIndex((s=>s.name===e.category));(0,t.useEffect)((()=>{localStorage.setItem("categories",JSON.stringify(m)),h(l)}),[m]);return(0,o.jsx)(o.Fragment,{children:0===m.length?(0,o.jsx)(i,{urlError:e.urlError}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"tasks",children:j<0?(0,o.jsx)(i,{urlError:e.urlError}):null===(s=g[j])||void 0===s?void 0:s.tasks.map(((e,s)=>(0,o.jsxs)("div",{className:"tasks__block",children:[(0,o.jsx)("button",{className:"tasks__block--bookmark",onClick:()=>((e,s)=>{C((s=>{const r=[...s],A=r[j].tasks.map(((s,r)=>r===e?[s[0],!s[1]]:s));return r[j]={...r[j],tasks:A},r})),(0,n.V)("Zmieniono status zadania: "+s)})(s,e[0]),children:(0,o.jsx)("img",{src:e[1]?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADDSURBVHgB7dG/CsIwEMfxXxx8LnHy4QpOvoKOrrr4bxH0FVy7dq2LjXdISqihydVaKNwXDkIIfEhi5rBLDNAEA6WQQgoppJBCo4QsUPBAmAhi4AmspjRSLBlyyBWm2NNIsSTIR9yeFItCIaQLFoNyQrIQ0sT4LDpCefm5SYlIjJURLAhVwCMVcfHZNuwLove+n2BEiI8dYDJa3lohRo4wa/wYYZsmVkMv4NIH4mMVf58P8cYZZoueoy/Y1dgMdoE/x8YbJ2ZeqLhFymsAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM9SURBVHgBtVY9a5RBEJ7ZvEkKxUIIGE2E/AHBn6CtZexNbWWvgQTiD7CxNq0aiIVtEIIYu8NC7HJgCkGF5C5fJtw7zuzn7L6LCl72eNmvmXlmnp3ZPVxe3COwDfkj1Zdroam5Fo17oHT9iIcmLWQaSggrq16WqGI8fElOxJogcu/hbu4u8pgEB50skYytZkstr6IOW3uQefb2+YINqYmxaSVHSUBIVhjMbWMJkOuXwGzD2HE4Je9xhcXIhZVB32sdr6XmXs9RafSJBo8LjzLAtm2FVAyRKh0sQDJ9o2jVHuX8Y5wTmhpjEEH1WeoWI+KftoCkgyGV59ShJzvHAOhlMPhsomVI2eXntdy1IF4mZRB2SsTJOLcCUJaRGS8htXUtFedY0I1BzzFClYhsfmhKvI6nlDwIFA0hsYDKmcAQqIgw+pZ5Syr+QCc7ItHp89OO/KkZzWu3BuLNEIxj7i2QKt5SXzFE+q6zRrIzsrno6TJoSK1Cyiqo6RdUozojZT5WfbrPFK0Iik6iYNP3NXs+onIVs2rPKQCd8sEZyPpOpPEKis9R5+atNPy0NYO9rZlkIa+Pys3gfGvihDo1FJ8E2Tv/ZeDz+6uw9+Wy3R/x/Nbd7zA53cassxnpryF7jpCy3qTwIrwfpBtCQHbezDLIFZn35fu2e8muyV6ITteZP99YO6awr+vIlhEbQjE4+DElm30zMnfkk7Gs7Ww6MHU2lqv8ZcYsok7GHA8b2H51g0GmRcaCrGzO9uVzYNgf/JyG7ZdzcHQwkZcG5fmj/zNkgifDBsXbk0FjI5nwIGE/gUGfZZnG69YxxQqmTmedXxdPToaT8EFAho09E1OAlGDgwT4ymOhCJXuzF1Z4Pj2cYpBrVoFvtp4Znd2ugWgwiZZPqHfM0Yuu9BWg5MDRYAIDCAfWM+0ZR7KwD39pNjKW5bTrRRojWPZMEBz4DBJBDuVd848gCWxh37TnNrLTQwcmWWkTXZ4g908VpfA4Te31sL62MbcE/9GeLO69YPMPnE0TInK0ycI4QKSJDYLRujjeeWEJ2mfjAElgN5dapNWQbA4I29W1jflHMOb29PX8Ssu2Ldjy/a8rcMHtMWP8BmvZ8UyQDw9dAAAAAElFTkSuQmCC",alt:"bookmark"})}),(0,o.jsx)("h2",{children:e[0]}),(0,o.jsx)(c.A,{text:"Zako\u0144cz",onClick:()=>(e=>{C((s=>{const r=[...s];return r[j].tasks.splice(e,1),r})),(0,n.V)("Usuni\u0119to zadanie")})(s),hoverColor:"rgba(248, 113, 113, 0.6)",color:"#AE505A"})]},e[0])))}),j>=0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"tasks__add",children:[(0,o.jsx)(d.A,{onInputChange:a}),(0,o.jsx)(c.A,{hoverColor:"rgba(74, 222, 128, 0.3)",text:"Dodaj zadanie",onClick:()=>{var e;""===A||void 0===A?(0,n.W)("Pr\xf3bujesz doda\u0107 puste zadanie"):null!==(e=g[j])&&void 0!==e&&e.tasks.find((e=>e[0]===A))?(0,n.W)("Pr\xf3bujesz doda\u0107 istniej\u0105ce ju\u017c zadanie"):(C((e=>{const s=[...e],r=[...s[j].tasks,["".concat(A),!1]];return s[j]={...s[j],tasks:r},s})),(0,n.V)("Dodano zadanie"))},color:"rgba(249, 250, 251, 0.3)"})]}),(0,o.jsx)(c.A,{hoverColor:"rgba(248, 113, 113, 0.3)",text:"Usu\u0144 kategorie",color:"rgba(249, 250, 251, 0.3)",onClick:()=>{C((e=>{const s=[...e];return s.splice(j,1),s})),setTimeout((()=>{r("/")}),100),(0,n.V)("Usuni\u0119to kategorie")}})]})]})})},h=()=>{const e=(0,u.g)().categoryName;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{headline:e}),(0,o.jsx)(g,{urlError:e,category:e})]})}}}]);
//# sourceMappingURL=841.2b2c2ca7.chunk.js.map