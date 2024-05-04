export function createTask(event) {
  const formTask = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    formTask[key] = value;
  });
  return formTask;
}
