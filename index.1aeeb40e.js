const t={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};let e=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[t]];return e};function n(t){const n={id:e()};return new FormData(t.currentTarget).forEach(((t,e)=>{n[e]=t})),n}function s(){return JSON.parse(localStorage.getItem("tasks"))||[]}const a={add:function(t){const e=s();e.push(t),localStorage.setItem("tasks",JSON.stringify(e))},getAll:s,deleteTask:function(t){const e=a.getAll().filter((e=>e.id!==t));localStorage.setItem("tasks",JSON.stringify(e))}};function o(t){return`<li class="task-list-item">\n     <button data-id="${t.id}" class="task-list-item-btn">Delete</button>\n      <h3>${t.taskName}</h3>\n     <p>${t.taskText}</p>\n     </li>`}t.form.addEventListener("submit",(e=>{e.preventDefault();const s=n(e);a.add(s);const r=o(s);t.list.insertAdjacentHTML("beforeend",r)})),function(){const e=a.getAll().map(o).join("");t.list.insertAdjacentHTML("beforeend",e)}(),t.list.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;console.log(t.target);const e=t.target.dataset.id;a.deleteTask(e)}));
//# sourceMappingURL=index.1aeeb40e.js.map
