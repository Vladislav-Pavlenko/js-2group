/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

import { refs } from './js/refs';
import { createTask } from './js/create-task';
import { localStorageApi } from './js/localstorage-api';
import { createTaskMarkup } from './js/create-task-markup';
import { renderTasks } from './js/render-tasks';
import { deleteTask } from './js/delete-task';

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const formTask = createTask(event);
  localStorageApi.add(formTask);
  const markup = createTaskMarkup(formTask);
  refs.list.insertAdjacentHTML('beforeend', markup);
  refs.form.reset();
});

renderTasks();

refs.list.addEventListener('click', deleteTask);
