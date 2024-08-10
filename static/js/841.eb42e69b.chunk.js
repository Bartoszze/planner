"use strict";(self.webpackChunkplanner=self.webpackChunkplanner||[]).push([[841],{214:(e,s,r)=>{r.d(s,{A:()=>o});var A=r(43),a=r(579);const o=e=>{const[s,r]=(0,A.useState)(!1),o={backgroundColor:s?e.hoverColor:e.color};return(0,a.jsx)("button",{style:o,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"buttonStyle",onClick:e.onClick,children:e.text})}},94:(e,s,r)=>{r.d(s,{A:()=>o});var A=r(43),a=r(579);const o=e=>{let{onInputChange:s}=e;const r=(0,A.useRef)(null),o=()=>{s(r.current.value)};return(0,A.useEffect)((()=>{const e=r.current;return e.addEventListener("input",o),()=>{e.removeEventListener("input",o)}}),[]),(0,a.jsx)("input",{className:"searchBar",ref:r,type:"text"})}},713:(e,s,r)=>{r.d(s,{V:()=>a,W:()=>o});var A=r(401);const a=e=>A.oR.success(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),o=e=>A.oR.warn(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},841:(e,s,r)=>{r.r(s),r.d(s,{default:()=>m});var A=r(475);var a=r(579);const o=e=>(0,a.jsxs)("div",{className:"headerCategory",children:[(0,a.jsx)("h2",{children:e.headline}),(0,a.jsx)(A.N_,{to:"/",children:(0,a.jsx)("div",{className:"headerCategory__button",children:(0,a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAQCAYAAADj5tSrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACmSURBVHgBvdQ9DsMgDAVgO0h0go2lU07TqVO33jO3gi5k4GehOKqQ0ipdwHkD8vZJ5gHAQUoplxDCDAMyHQAq5/wQQtzqPMNo5APcEVHVeXXOvaAz+A/w3i/GmBU6g9xAQziBDeEGNiSl9CQAGDPBCUFrrdJat3VJKZc6j10XHdxQqzAntHuMXNDu4qm6VGECCKJq11lCZ37a9Q3FGK/AFVrdqK/+DVFOoab4ruN9AAAAAElFTkSuQmCC",alt:"arrow"})})})]});var t=r(43),n=r(713);const l=r.p+"static/media/404.9e47edf8c773f7f343da6fcf4a05d4c8.svg",i=e=>(0,a.jsxs)("div",{className:"errorCategory",children:[(0,a.jsx)("img",{src:l,alt:"404 Error"}),(0,a.jsxs)("h1",{children:["Brak takiej kategorii ",(0,a.jsx)("span",{children:e.urlError}),". Popraw sw\xf3j url."]})]});var c=r(214),d=r(94),u=r(216),g=r(556);const h=e=>{var s,r;let A=(0,u.Zp)();const[o,l]=(0,t.useState)(),h=()=>JSON.parse(localStorage.getItem("categories")),[m,C]=(0,t.useState)(h),[j,k]=(0,t.useState)((()=>null===m?[]:[...m])),x=null===m||void 0===m?void 0:m.findIndex((s=>s.name===e.category));(0,t.useEffect)((()=>{localStorage.setItem("categories",JSON.stringify(j)),C(h)}),[j]);return(0,a.jsx)(a.Fragment,{children:0===j.length?(0,a.jsx)(i,{urlError:e.urlError}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"tasks",children:x<0?(0,a.jsx)(i,{urlError:e.urlError}):(0,a.jsx)(g._.Group,{axis:"y",onReorder:e=>{const s=[...m];s[x].tasks=e,C(s),k(m)},values:null===(s=m[x])||void 0===s?void 0:s.tasks,children:null===(r=m[x])||void 0===r?void 0:r.tasks.map(((e,s)=>(0,a.jsx)(g._.Item,{value:e,children:(0,a.jsxs)("div",{className:"tasks__block ".concat(e[1]?"mark":""," "),children:[(0,a.jsx)("button",{className:"tasks__block--bookmark",onClick:()=>((e,s)=>{k((s=>{const r=[...s],A=r[x].tasks.map(((s,r)=>r===e?[s[0],!s[1]]:s));return r[x]={...r[x],tasks:A},r})),(0,n.V)("Zmieniono status zadania: "+s)})(s,e[0]),children:(0,a.jsx)("img",{src:e[1]?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADDSURBVHgB7dG/CsIwEMfxXxx8LnHy4QpOvoKOrrr4bxH0FVy7dq2LjXdISqihydVaKNwXDkIIfEhi5rBLDNAEA6WQQgoppJBCo4QsUPBAmAhi4AmspjRSLBlyyBWm2NNIsSTIR9yeFItCIaQLFoNyQrIQ0sT4LDpCefm5SYlIjJURLAhVwCMVcfHZNuwLove+n2BEiI8dYDJa3lohRo4wa/wYYZsmVkMv4NIH4mMVf58P8cYZZoueoy/Y1dgMdoE/x8YbJ2ZeqLhFymsAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM9SURBVHgBtVY9a5RBEJ7ZvEkKxUIIGE2E/AHBn6CtZexNbWWvgQTiD7CxNq0aiIVtEIIYu8NC7HJgCkGF5C5fJtw7zuzn7L6LCl72eNmvmXlmnp3ZPVxe3COwDfkj1Zdroam5Fo17oHT9iIcmLWQaSggrq16WqGI8fElOxJogcu/hbu4u8pgEB50skYytZkstr6IOW3uQefb2+YINqYmxaSVHSUBIVhjMbWMJkOuXwGzD2HE4Je9xhcXIhZVB32sdr6XmXs9RafSJBo8LjzLAtm2FVAyRKh0sQDJ9o2jVHuX8Y5wTmhpjEEH1WeoWI+KftoCkgyGV59ShJzvHAOhlMPhsomVI2eXntdy1IF4mZRB2SsTJOLcCUJaRGS8htXUtFedY0I1BzzFClYhsfmhKvI6nlDwIFA0hsYDKmcAQqIgw+pZ5Syr+QCc7ItHp89OO/KkZzWu3BuLNEIxj7i2QKt5SXzFE+q6zRrIzsrno6TJoSK1Cyiqo6RdUozojZT5WfbrPFK0Iik6iYNP3NXs+onIVs2rPKQCd8sEZyPpOpPEKis9R5+atNPy0NYO9rZlkIa+Pys3gfGvihDo1FJ8E2Tv/ZeDz+6uw9+Wy3R/x/Nbd7zA53cassxnpryF7jpCy3qTwIrwfpBtCQHbezDLIFZn35fu2e8muyV6ITteZP99YO6awr+vIlhEbQjE4+DElm30zMnfkk7Gs7Ww6MHU2lqv8ZcYsok7GHA8b2H51g0GmRcaCrGzO9uVzYNgf/JyG7ZdzcHQwkZcG5fmj/zNkgifDBsXbk0FjI5nwIGE/gUGfZZnG69YxxQqmTmedXxdPToaT8EFAho09E1OAlGDgwT4ymOhCJXuzF1Z4Pj2cYpBrVoFvtp4Znd2ugWgwiZZPqHfM0Yuu9BWg5MDRYAIDCAfWM+0ZR7KwD39pNjKW5bTrRRojWPZMEBz4DBJBDuVd848gCWxh37TnNrLTQwcmWWkTXZ4g908VpfA4Te31sL62MbcE/9GeLO69YPMPnE0TInK0ycI4QKSJDYLRujjeeWEJ2mfjAElgN5dapNWQbA4I29W1jflHMOb29PX8Ssu2Ldjy/a8rcMHtMWP8BmvZ8UyQDw9dAAAAAElFTkSuQmCC",alt:"bookmark"})}),(0,a.jsx)("h2",{children:e[0]}),(0,a.jsx)(c.A,{text:"Zako\u0144cz",onClick:()=>(e=>{k((s=>{const r=[...s];return r[x].tasks.splice(e,1),r})),(0,n.V)("Usuni\u0119to zadanie")})(s),hoverColor:"rgba(248, 113, 113, 0.6)",color:"#AE505A"})]})},e[0])))})}),x>=0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"tasks__add",children:[(0,a.jsx)(d.A,{onInputChange:l}),(0,a.jsx)(c.A,{hoverColor:"rgba(74, 222, 128, 0.3)",text:"Dodaj zadanie",onClick:()=>{var e;""===o||void 0===o?(0,n.W)("Pr\xf3bujesz doda\u0107 puste zadanie"):null!==(e=m[x])&&void 0!==e&&e.tasks.find((e=>e[0]===o))?(0,n.W)("Pr\xf3bujesz doda\u0107 istniej\u0105ce ju\u017c zadanie"):(k((e=>{const s=[...e],r=[...s[x].tasks,["".concat(o),!1]];return s[x]={...s[x],tasks:r},s})),(0,n.V)("Dodano zadanie"))},color:"rgba(249, 250, 251, 0.3)"})]}),(0,a.jsx)(c.A,{hoverColor:"rgba(248, 113, 113, 0.3)",text:"Usu\u0144 kategorie",color:"rgba(249, 250, 251, 0.3)",onClick:()=>{k((e=>{const s=[...e];return s.splice(x,1),s})),setTimeout((()=>{A("/")}),100),(0,n.V)("Usuni\u0119to kategorie")}})]})]})})},m=()=>{const e=(0,u.g)().categoryName;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{headline:e}),(0,a.jsx)(h,{urlError:e,category:e})]})}}}]);
//# sourceMappingURL=841.eb42e69b.chunk.js.map