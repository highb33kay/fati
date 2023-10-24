import { Response, NextFunction } from "express";

const responseHandler = (
  status: number,
  data: any,
  message: string,
  res: Response,
  next: NextFunction
) => {
  res.status(status).json({
    success: true,
    data,
    message,
  });
};

export const createResponseHandler = (
  data: any,
  message: string,
  res: Response,
  next: NextFunction
) => {
  responseHandler(201, data, message, res, next);
};

export const successResponseHandler = (
  data: any,
  message: string,
  res: Response,
  next: NextFunction
) => {
  responseHandler(200, data, message, res, next);
};

export const acceptedResponseHandler = (
  data: any,
  message: string,
  res: Response,
  next: NextFunction
) => {
  responseHandler(202, data, message, res, next);
};

export const noContentResponseHandler = (res: Response) => {
  res.status(204).send();
};

export const badRequestResponseHandler = (
  message: string,
  res: Response,
  next: NextFunction
) => {
  responseHandler(400, null, message, res, next);
};

export const authorizedResponseHandler = (
  message: string,
  res: Response,
  next: NextFunction
) => {
  responseHandler(401, null, message, res, next);
};
