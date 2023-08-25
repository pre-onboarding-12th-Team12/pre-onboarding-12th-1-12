import { TodoType } from 'types';

export const sortedTodo = (todoData: TodoType[]) => {
  return todoData?.slice().sort((a: TodoType, b: TodoType) => {
    if (a.isCompleted === b.isCompleted) {
      return 0;
    } else if (a.isCompleted && !b.isCompleted) {
      return 1;
    } else {
      return -1;
    }
  });
};
