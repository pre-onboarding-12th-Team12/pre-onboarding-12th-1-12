import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../types';
import useValidation from '../hooks/Vaildation';
import { css, styled } from 'styled-components';
import { PostSignIn } from '../api/requests';
import { Wrapper } from '../style/Wrapper';
import { Title } from '../style/Common';

interface Login {
  access_token?: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<AuthForm>({
    email: '',
    password: '',
  });

  const { isValid } = useValidation(form);
  const isToken = window.localStorage.getItem('token');

  useEffect(() => {
    if (isToken) {
      navigate(`/todo`);
    }
  }, [navigate, isToken]);

  const handleOnSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data: Login = await PostSignIn(form);
    const token = data.access_token as string;
    const hasToken = token !== '';

    if (hasToken) {
      alert('로그인되었습니다.');
      localStorage.setItem('token', token);
      navigate('/todo');
    } else {
      alert('잘못된 로그인 정보입니다.');
    }
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <form className="form form__login">
        <Input
          type="text"
          data-testid="email-input"
          className="input width-100"
          placeholder="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <Input
          type="password"
          data-testid="password-input"
          className="input width-100"
          placeholder="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <Button
          data-testid="signin-button"
          disabled={isValid.isEmail && isValid.isPassword ? false : true}
          onClick={e => {
            void handleOnSubmit(e);
          }}
        >
          로그인
        </Button>
      </form>
    </Wrapper>
  );
};

export default SignIn;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  color: white;
  background-color: var(--dark-bg);
  border-radius: 10px;

  &::placeholder {
    font-size: 14px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: var(--white);
    -webkit-box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:autofill,
  &:autofill:hover,
  &:autofill:focus,
  &:autofill:active {
    -webkit-text-fill-color: var(--white);
    -webkit-box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    box-shadow: 0 0 0px 1000px var(--dark-bg) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  color: white;
  background-color: var(--primary);
  box-sizing: border-box;

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      background-color: var(--secondary);
      color: #636777;
    `}
`;
