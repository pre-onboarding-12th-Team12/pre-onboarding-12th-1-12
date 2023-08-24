import React from 'react';
import ToDoList from 'components/todo/ToDoList';
import Signout from 'components/Signout';
import { Title } from 'style/Common';
import { Layout } from 'style/Layout';

const ToDo = () => {
  return (
    <>
      <Signout />
      <Layout>
        <Title>오늘의 할일은?</Title>
        <ToDoList />
      </Layout>
    </>
  );
};

export default ToDo;
