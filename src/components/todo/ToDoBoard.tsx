import styled from 'styled-components';
import ToDoTask from './ToDoTask';
import { TodoTaskProps, TodoType } from 'types';

const ToDoBoard: React.FC<TodoTaskProps> = ({
  todos,
  handleDeleteTodo,
  handleSortedTodo,
}) => {
  return (
    <TodoTaskBoard>
      {todos &&
        todos.map(todo => {
          return (
            <ToDoTask
              key={todo.id}
              todos={todos}
              task={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleSortedTodo={(todoData: TodoType[], id: number) =>
                handleSortedTodo(todos, id)
              }
            />
          );
        })}
    </TodoTaskBoard>
  );
};

export default ToDoBoard;

const TodoTaskBoard = styled.ul`
  max-height: 415px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: 3px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: var(--primary);
    border-radius: 10px;
  }
`;
