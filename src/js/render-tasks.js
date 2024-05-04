import { createTaskMarkup } from './create-task-markup';
import { refs } from './refs';
import { localStorageApi } from './localstorage-api';

export function renderTasks() {
  const tasks = localStorageApi.getAll();
  const markup = tasks.map(createTaskMarkup).join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}
