class HttpException extends Error {
  status: number;
  message: string;
  additionalInfo: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export interface ResponseError {
  message: string;
  additionalInfo?: string;
}

export default HttpException;
