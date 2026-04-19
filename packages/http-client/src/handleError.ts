interface AppError {
  message?: string;
  name?: string;
  code?: string;
  status?: number;
  payload?: unknown;
}

export class HttpError extends Error {
  public readonly code: string;
  public readonly status: number;
  public readonly payload: unknown;

  constructor(error: AppError) {
    const { message, name, code, status, payload } = error;

    super(message || 'An error occurred while making the HTTP request.');
    this.name = name || 'GlobalException';
    this.code = code || 'UnknownError';
    this.status = status || 500;
    this.payload = payload;
  }
}
