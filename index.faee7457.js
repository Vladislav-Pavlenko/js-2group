const t={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};function e(t){const e={};return new FormData(t.currentTarget).forEach(((t,n)=>{e[n]=t})),e}const n={add:function(t){const e=JSON.parse(localStorage.getItem("tasks"))||[];e.push(t),localStorage.setItem("tasks",JSON.stringify(e))}};function s(t){return`<li class="task-list-item">\n     <button class="task-list-item-btn">Delete</button>\n      <h3>${t.taskName}</h3>\n     <p>${t.taskText}</p>\n     </li>`}t.form.addEventListener("submit",(a=>{a.preventDefault();const o=e(a);n.add(o);const r=s(o);t.list.insertAdjacentHTML("beforeend",r)}));
//# sourceMappingURL=index.faee7457.js.map