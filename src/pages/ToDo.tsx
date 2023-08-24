import React from 'react';
import ToDoList from 'components/todo/ToDoList';
import { Title } from 'style/Common';
import { Layout } from 'style/Layout';

const ToDo = () => {
  return (
    <Layout>
      <Title>오늘의 할일은?</Title>
      <ToDoList />
    </Layout>
  );
};

export default ToDo;
