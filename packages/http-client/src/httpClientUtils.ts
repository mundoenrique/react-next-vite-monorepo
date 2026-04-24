import { AxiosHeaders, type AxiosRequestConfig } from 'axios';

export const defaultHeaders = {
  Accept: 'application/json',
};

export const defaultConfig: AxiosRequestConfig = {
  timeout: 59900, // 59.9 seconds, just below most proxies 60 second timeout for HTTP requests
  headers: defaultHeaders,
  allowAbsoluteUrls: true,
  withCredentials: false,
  validateStatus: (status) => (status >= 200 && status < 300) || status === 304,
};

export function mergeHeaders(baseHeaders: AxiosHeaders, overrideHeaders: AxiosRequestConfig['headers']): void {
  if (overrideHeaders === undefined) {
    return;
  }

  if (overrideHeaders instanceof AxiosHeaders) {
    baseHeaders.set(overrideHeaders);
    return;
  }

  if (typeof overrideHeaders === 'string') {
    baseHeaders.set(AxiosHeaders.from(overrideHeaders));
    return;
  }

  for (const [key, value] of Object.entries(overrideHeaders)) {
    if (value !== undefined) {
      baseHeaders.set(key, value);
    }
  }
}
