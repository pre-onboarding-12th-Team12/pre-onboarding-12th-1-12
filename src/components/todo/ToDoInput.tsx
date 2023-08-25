import React, { useState } from 'react';
import { CreateTodo } from 'api/requests';
import { styled } from 'styled-components';

type ToDoProps = {
  fetchData: () => Promise<void>;
};

const ToDoInput = ({ fetchData }: ToDoProps) => {
  const [todo, setTodo] = useState<{ todo: string }>({ todo: '' });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ todo: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!todo.todo) return;
    setTodo({ todo: '' });
    await CreateTodo(todo);
    fetchData().catch(error => {
      console.error(error);
    });
  };

  return (
    <ToDoInputLayout
      onSubmit={e => {
        void handleSubmit(e);
      }}
    >
      <NewToDo
        type="text"
        id="todo-input"
        data-testid="new-todo-input"
        autoFocus
        placeholder="새로운 할일을 입력해주세요"
        value={todo.todo}
        onChange={handleInput}
      />
      <AddBtn data-testid="new-todo-add-button">추가</AddBtn>
    </ToDoInputLayout>
  );
};

export default ToDoInput;

const ToDoInputLayout = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const NewToDo = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  color: var(--white);
  background-color: var(--bg);
  border-bottom: 1px solid var(--gray-500);
  box-sizing: border-box;
  outline: none;
  font-size: 22px;

  &::placeholder {
    font-size: 16px;
    color: var(--gray-800);
  }
`;

const AddBtn = styled.button`
  padding: 10px 20px;
  color: var(--white);
  background-color: var(--primary);
  border-radius: 20px;
  flex-shrink: 0;
  font-size: 16px;
`;
