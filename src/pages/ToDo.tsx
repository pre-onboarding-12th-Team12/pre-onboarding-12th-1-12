import React from 'react';
import ToDoList from 'components/todo/ToDoList';
import SignOut from 'components/SignOut';
import { Title } from 'style/Common';
import { Layout } from 'style/Layout';

const ToDo = () => {
  return (
    <>
      <SignOut />
      <Layout>
        <Title>오늘의 할일은?</Title>
        <ToDoList />
      </Layout>
    </>
  );
};

export default ToDo;
