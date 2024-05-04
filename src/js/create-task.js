import { nanoid } from 'nanoid';
export function createTask(event) {
  const formTask = { id: nanoid() };
  new FormData(event.currentTarget).forEach((value, key) => {
    formTask[key] = value;
  });
  return formTask;
}
