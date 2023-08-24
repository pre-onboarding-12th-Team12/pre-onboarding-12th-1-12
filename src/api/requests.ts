import { http } from './http';
import { TodoType } from 'types';

export const PostSignUp = async (form: object) => {
  return await http.post(`auth/signup`, form, {
    headers: { 'Content-Type': `application/json` },
  });
};

export const PostSignIn = async (form: object) => {
  return await http.post(`auth/signin`, form, {
    headers: { 'Content-Type': `application/json` },
  });
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
