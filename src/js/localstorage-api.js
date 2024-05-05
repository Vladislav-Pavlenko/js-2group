const KEY = 'tasks';

function add(formTask) {
  const tasksArray = getAll();
  tasksArray.push(formTask);
  localStorage.setItem(KEY, JSON.stringify(tasksArray));
}

function getAll() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

function deleteTask(id) {
  const tasksArray = localStorageApi.getAll();
  const updateTasks = tasksArray.filter(item => item.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updateTasks));
  return updateTasks;
}

export const localStorageApi = {
  add,
  getAll,
  deleteTask,
};
