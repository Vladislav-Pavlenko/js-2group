import { localStorageApi } from './localstorage-api';

export function deleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(event.target);
  const id = event.target.dataset.id;
  localStorageApi.deleteTask(id);
}
