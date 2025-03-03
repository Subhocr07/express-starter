import { Request, Response, NextFunction } from "express";
import sendResponse from "../helpers/response.helper";
import ApiError from "../utils/apiError";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    // Simulate user creation
    const user = { id: "12345", name, email };

    return sendResponse(res, 201, "User created successfully", user);
  } catch (error) {
    next(new ApiError(500, "Something went wrong", error));
  }
};
