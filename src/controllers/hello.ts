import express, {
  Request,
  RequestHandler,
  Response,
  NextFunction,
} from "express";
import {
  CustomError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  InternalServerError,
  MethodNotAllowedError,
} from "../middleware/errorhandler";

import {
  createResponseHandler,
  successResponseHandler,
  acceptedResponseHandler,
  noContentResponseHandler,
  badRequestResponseHandler,
  authorizedResponseHandler,
} from "../middleware/responsehandler";

export const sayHello = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    successResponseHandler(
      { message: "Hello World" },
      "Hello World",
      res,
      next
    );
  } catch (error) {
    // Handle error and send an appropriate response
    if (error instanceof BadRequestError) {
      badRequestResponseHandler(error.message, res, next);
    } else if (error instanceof UnauthorizedError) {
      authorizedResponseHandler(error.message, res, next);
    } else {
      // Handle other error types
      next(error);
    }
  }
};
