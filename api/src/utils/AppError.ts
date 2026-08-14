class AppError {
  message: string;
  statusCode: number = 400;

  constructor(message: string, statusCode?: number) {
    this.message = message;
    statusCode && (this.statusCode = statusCode);
  }
}

export { AppError };
