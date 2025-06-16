import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRole } from "../models/enums/role.enum";
import UserModel from "../models/user.model";
import { JWT_SECRET } from "../config/env";
import { AppError } from "../utils/AppError";

export const signup = async ({
  name,
  email,
  password,
  role = UserRole.USER,
}: {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}) => {
  // Check if user already exists
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new AppError("User already exists", 409);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
    role,
  });

  await newUser.save();

  // Return JWT
  const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { token, user: newUser };
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new AppError("Invalid email or password",401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError("Invalid email or password",401);
  }

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { token, user };
};
