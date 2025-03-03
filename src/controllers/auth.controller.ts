import { Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(400).json({ message: "Error registering user" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(400).json({ message: "Login failed" });
  }
};
