import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

import { HttpError } from './handleError';

export async function httpRequest<T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return httpClient.request<T>(config);
}

const httpClient = axios.create({
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
  allowAbsoluteUrls: true,
  validateStatus: (status) => (status >= 200 && status < 300) || status === 304,
});

httpClient.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    let message: string;

    if (axios.isAxiosError(error)) {
      message = error.message;
      const name = error.name;
      const code = error.code;
      const status = error.status;
      const payload: unknown = error.config?.data;

      throw new HttpError({ message, name, code, status, payload });
    }

    message = (error as Error).message || String(error);

    throw new HttpError({ message });
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let message: string;

    if (axios.isAxiosError(error)) {
      message = error.message;
      const name = error.name;
      const code = error.code;
      const status = error.response?.status;
      const payload: unknown = error.response?.data;

      throw new HttpError({ message, name, code, status, payload });
    }

    message = (error as Error).message || String(error);

    throw new HttpError({ message });
  }
);
