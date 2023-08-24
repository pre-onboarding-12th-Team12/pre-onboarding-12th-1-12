import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ToDoInput from './ToDoInput';
import { GetTodo } from 'api/requests';
import { TodoType } from 'types';

const ToDoBox = () => {
  const [todoData, setTodoData] = useState<TodoType[]>([]);

  const fetchData = async () => {
    const todos = await GetTodo();
    setTodoData(todos);
  };

  useEffect(() => {
    fetchData().catch(error => {
      console.error(error);
    });
  }, [GetTodo]);

  const sortedData = todoData?.slice().sort((a, b) => {
    if (a.isCompleted === b.isCompleted) {
      return 0;
    } else if (a.isCompleted && !b.isCompleted) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <>
      <ToDoInput fetchData={fetchData} />
      <ToDoList>
        {sortedData?.map(todo => <div key={todo.id}>{todo.todo}</div>)}
      </ToDoList>
    </>
  );
};

export default ToDoBox;

const ToDoList = styled.ul`
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
