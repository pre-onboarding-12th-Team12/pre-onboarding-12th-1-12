import { http } from './http';
import { TodoType } from 'types';

export const PostSignUp = async (form: object) => {
  try {
    await http.post(`auth/signup`, form, {
      headers: { 'Content-Type': `application/json` },
    });
    return { statusCode: 200, message: '회원가입 되었습니다.' };
  } catch (error) {
    return { statusCode: 500, message: '회원가입에 실패하였습니다.' };
  }
};

export const PostSignIn = async (form: object) => {
  try {
    return await http.post(`auth/signin`, form, {
      headers: { 'Content-Type': `application/json` },
    });
  } catch (e) {
    return { access_token: '' };
  }
};

export const GetTodo = async (): Promise<TodoType[]> => {
  const token = localStorage.getItem('token') || '';
  return await http.get('todos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const CreateTodo = async (todo: object) => {
  const token = localStorage.getItem('token') || '';
  return await http.post('todos', todo, {
    headers: {
      'Content-Type': `application/json`,
      Authorization: `Bearer ${token}`,
    },
  });
};
