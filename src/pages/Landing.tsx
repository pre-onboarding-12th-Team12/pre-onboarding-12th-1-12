import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Title } from 'style/Common';
import { CommonStyle } from 'style/Wrapper';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <Layout>
      <TitleLayout>
        <Title>오늘의 할일</Title>
      </TitleLayout>
      <SLink to="/signin">로그인</SLink>
      <p> 아이디가 없으신가요? </p>
      <Signup to="/signup">회원가입</Signup>
    </Layout>
  );
};

export default Landing;

const Layout = styled.div`
  ${CommonStyle}
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;

  p {
    font-size: 12px;
    color: var(--gray-500);

    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 50px;
      height: 1px;
      background-color: var(--gray-500);
      margin: 0 8px 3px 8px;
    }
  }
`;

const TitleLayout = styled.div`
  img {
    width: 100px;
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

export const SLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  color: white;
  background-color: var(--gray-800);
  box-sizing: border-box;

  &:hover {
    background-color: var(--primary);
  }
`;

const Signup = styled(Link)`
  color: var(--light);
`;
