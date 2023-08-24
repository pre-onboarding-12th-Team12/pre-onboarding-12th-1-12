import { http } from './http';

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
