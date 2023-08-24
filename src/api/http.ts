import Axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const axios = Axios.create({
  baseURL: BASE_URL,
});

export const http = {
  get: function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    return axios.get<Response>(url, config).then(res => res.data);
  },

  delete: function remove<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    return axios.delete<Response>(url, config).then(res => res.data);
  },

  post: function post<Request = object, Response = object>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig
  ) {
    return axios.post<Response>(url, data, config).then(res => res.data);
  },

  put: function put<Request = object, Response = unknown>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig
  ) {
    return axios.put<Response>(url, data, config).then(res => res.data);
  },
};
