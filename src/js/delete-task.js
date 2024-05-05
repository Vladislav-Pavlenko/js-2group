import { createTaskMarkup } from './create-task-markup';
import { localStorageApi } from './localstorage-api';
import { refs } from './refs';

export function deleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(event.target);
  const id = event.target.dataset.id;
  const tasksUpdate = localStorageApi.deleteTask(id);
  refs.list.innerHTML = tasksUpdate.map(createTaskMarkup).join('');
}
