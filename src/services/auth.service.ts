import bcrypt from "bcryptjs";
import User from "../model/order.model";

export const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

export const validateUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
};
