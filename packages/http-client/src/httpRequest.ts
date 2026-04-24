import { type AxiosRequestConfig, type AxiosResponse } from 'axios';

import { createHttpClient } from './createHttpClient';

const httpClient = createHttpClient();

export function httpRequest<TResponse = unknown, TRequestData = unknown>(
  requestConfig: AxiosRequestConfig<TRequestData>
): Promise<AxiosResponse<TResponse, TRequestData>> {
  const { url, method, data, ...config } = requestConfig;

  return httpClient.request<TResponse, AxiosResponse<TResponse, TRequestData>, TRequestData>({
    url,
    method,
    data,
    ...config,
  });
}
