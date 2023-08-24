import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../types';
import useValidation from '../hooks/Vaildation';
import { styled } from 'styled-components';
import { PostSignUp } from '../api/requests';

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

    if (statusCode) {
      alert(message);
    } else {
      alert('회원가입되었습니다.');
      navigate('/signin');
    }
  };

  return (
    <SignUpContent>
      <h1>Sign up</h1>
      <form className="form form__login">
        <input
          type="text"
          data-testid="email-input"
          className="input width-100"
          placeholder="email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          data-testid="password-input"
          className="input width-100"
          placeholder="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button
          data-testid="signup-button"
          disabled={isValid.isEmail && isValid.isPassword ? false : true}
          onClick={e => {
            void handleOnSubmit(e);
          }}
        >
          회원가입
        </button>
      </form>
    </SignUpContent>
  );
};

export default SignUp;

const SignUpContent = styled.div``;
