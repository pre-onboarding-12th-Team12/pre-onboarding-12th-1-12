import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ToDoList from 'components/todo/ToDoList';
import SignOut from 'components/SignOut';
import { Title } from 'style/Common';
import { Wrapper } from 'style/Wrapper';

const ToDo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return navigate('/signin');
  }, [navigate, token]);

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
