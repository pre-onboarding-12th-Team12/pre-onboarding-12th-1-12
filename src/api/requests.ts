import { http } from './http';
import { TodoType } from 'types';
import axios from 'axios';

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

export const UpdateTodo = async ({
  id,
  todo,
  updateIsCompleted,
}: {
  id: number;
  todo: string;
  updateIsCompleted: boolean;
}) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('토큰 없음');

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const payload = {
      todo,
      isCompleted: updateIsCompleted,
    };

    await axios.put(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      payload,
      header
    );
  } catch (error) {
    console.log(error);
  }
};

export const DeleteTodo = async (id: number) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) throw new Error('토큰 없음');

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(
      `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      header
    );
  } catch (error) {
    console.log(error);
  }
};
