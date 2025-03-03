import { Response } from "express";

const sendResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data: any = null
) => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    data,
  });
};

export default sendResponse;
