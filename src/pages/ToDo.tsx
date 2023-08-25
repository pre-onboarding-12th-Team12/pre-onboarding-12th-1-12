import React from 'react';
import ToDoList from 'components/todo/ToDoList';
import SignOut from 'components/SignOut';
import { Title } from 'style/Common';
import { Wrapper } from 'style/Wrapper';

const ToDo = () => {
  return (
    <>
      <SignOut />
      <Wrapper>
        <Title>오늘의 할일은?</Title>
        <ToDoList />
      </Wrapper>
    </>
  );
};

export default ToDo;
