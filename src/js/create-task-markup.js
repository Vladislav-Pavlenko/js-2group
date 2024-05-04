export function createTaskMarkup(formTask) {
  return `<li class="task-list-item">
     <button data-id="${formTask.id}" class="task-list-item-btn">Delete</button>
      <h3>${formTask.taskName}</h3>
     <p>${formTask.taskText}</p>
     </li>`;
}
