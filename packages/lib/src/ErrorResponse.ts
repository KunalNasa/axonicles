// errors that happens during app operations, like invalid data, unauthorised

export class AppError extends Error {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly isOperational: boolean;
  
    constructor(message: string, statusCode = 400, isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.isOperational = isOperational;
  
      Error.captureStackTrace(this, this.constructor);
    }
}


export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}


export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized Request") {
    super(message, 401);
  }
}

export class InternalServerError extends AppError {
  constructor(message = "Something went wrong! Please try again later"){
    super(message, 500);
  }
}
