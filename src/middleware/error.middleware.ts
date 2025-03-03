import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/apiError";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[ERROR] ${err.message}`);

  // Check if it's an instance of ApiError
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: err.data || null,
    });
  }

  // Handle generic server errors
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorHandler;
