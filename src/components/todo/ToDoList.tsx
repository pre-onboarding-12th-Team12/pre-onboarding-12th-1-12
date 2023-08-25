import { useEffect, useState, useCallback } from 'react';
import ToDoInput from './ToDoInput';
import ToDoBoard from './ToDoBoard';
import { GetTodo } from 'api/requests';
import { TodoType } from 'types';
import { DeleteTodo } from '../../api/requests';
import { sortedTodo } from 'utils/sortedTodo';

const ToDoBox = () => {
  const [todoData, setTodoData] = useState<TodoType[]>([]);

  const fetchData = async () => {
    const todos = await GetTodo();
    setTodoData(sortedTodo(todos));
  };

  useEffect(() => {
    fetchData().catch(error => {
      console.error(error);
    });
  }, [GetTodo]);

  // todo sorting
  const handleSortedTodo = useCallback(
    (todoData: TodoType[], id: number) => {
      const sortedTodoData = todoData.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      setTodoData(sortedTodo(sortedTodoData));
    },
    [todoData]
  );

  // todo 삭제
  const handleSubmitDeleteTodo = useCallback(
    async (id: number): Promise<void> => {
      try {
        await DeleteTodo(id);

        const updatedTodoData = [...todoData].filter(todo => todo.id !== id);
        setTodoData(updatedTodoData);

        return;
      } catch (error) {
        console.error(error);

        return;
      }
    },
    [todoData]
  );

  return (
    <>
      <ToDoInput fetchData={fetchData} />
      <ToDoBoard
        todos={todoData}
        handleDeleteTodo={handleSubmitDeleteTodo}
        handleSortedTodo={handleSortedTodo}
      />
    </>
  );
};

export default ToDoBox;
