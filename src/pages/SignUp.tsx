import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../types';
import useValidation from '../hooks/Vaildation';
import { css, styled } from 'styled-components';
import { PostSignUp } from '../api/requests';
import { Layout } from '../style/Layout';
import { Title } from '../style/Common';
interface SignUpData {
  statusCode?: number;
  message?: string;
}

const SignUp = () => {
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
    const { statusCode, message }: SignUpData = await PostSignUp(form);
    alert(message);
    if (statusCode === 200) {
      navigate('/signin');
    }
  };

  return (
    <Layout>
      <Title>회원가입</Title>
      <form className="form form__login">
        <Input
          type="text"
          data-testid="email-input"
          className="input width-100"
          placeholder="email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <Input
          type="password"
          data-testid="password-input"
          className="input width-100"
          placeholder="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <Button
          data-testid="signup-button"
          disabled={isValid.isEmail && isValid.isPassword ? false : true}
          onClick={e => {
            void handleOnSubmit(e);
          }}
        >
          회원가입
        </Button>
      </form>
    </Layout>
  );
};

export default SignUp;

const Wrapper = styled.div`
  ${Layout}

  button {
    margin-top: 30px;
  }
`;

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
