export interface AuthForm {
  email: string;
  password: string;
}

export interface TodoProps {
  todos: TodoType[];
}

export type TodoType = {
  id?: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
};

export interface TodoTaskProps {
  todos?: TodoType[];
  task?: TodoType;
  // eslint-disable-next-line no-unused-vars
  handleDeleteTodo: (id: number) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  handleSortedTodo: (todoData: TodoType[], id: number) => void;
}
