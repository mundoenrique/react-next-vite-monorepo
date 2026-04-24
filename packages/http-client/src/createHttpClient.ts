import axios, { AxiosHeaders, type AxiosInstance, type AxiosRequestConfig } from 'axios';

import { HttpError } from './handleError';
import { defaultHeaders, defaultConfig, mergeHeaders } from './httpClientUtils';

/**
 * Creates an Axios HTTP client instance with the provided configuration.
 * @param requestConfig - Axios request configuration.
 * @returns AxiosInstance - Configured Axios HTTP client instance.
 */
export function createHttpClient(requestConfig: AxiosRequestConfig = {}): AxiosInstance {
  const headers = AxiosHeaders.from(defaultHeaders);
  mergeHeaders(headers, requestConfig.headers);

  const mergedConfig: AxiosRequestConfig = {
    ...defaultConfig,
    ...requestConfig,
    headers,
  };

  const httpClient = axios.create(mergedConfig);

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

  return httpClient;
}
