import jwt from "jsonwebtoken";
import env from "../config/env";

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, env.jwtSecret, { expiresIn: "1h" });
};
