function add(formTask) {
  const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  tasksArray.push(formTask);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

export const localStorageApi = {
  add,
};
