import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../types';
import useValidation from '../hooks/Vaildation';
import { styled } from 'styled-components';
import { PostSignIn } from '../api/requests';

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

    if (token) {
      alert('로그인되었습니다.');

      localStorage.setItem('token', token);
      navigate('/todo');
      window.location.reload();
    } else {
      alert('잘못된 로그인 정보입니다.');
    }
  };

  return (
    <SignInContent>
      <h1>Login</h1>
      <form className="form form__login">
        <input
          type="text"
          data-testid="email-input"
          className="input width-100"
          placeholder="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          data-testid="password-input"
          className="input width-100"
          placeholder="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button
          data-testid="signin-button"
          disabled={isValid.isEmail && isValid.isPassword ? false : true}
          onClick={e => {
            void handleOnSubmit(e);
          }}
        >
          로그인
        </button>
      </form>
    </SignInContent>
  );
};

export default SignIn;

const SignInContent = styled.div``;
