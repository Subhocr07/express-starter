import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import ApiError from "../utils/apiError";

const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      next(new ApiError(400, "Validation error", error.errors));
    }
  };

export default validate;
