import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import * as userService from "../services/user.service";
import { getErrorMessage, getErrorStatus } from "../utils/error";

// POST /api/auth/signup
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body;
    const result = await userService.signup({ name, email, password, role });
    res.status(201).json(result);
  } catch (error) {
    next(new AppError(getErrorMessage(error), getErrorStatus(error)));
  }
};
// POST /api/auth/login
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login({ email, password });
    res.status(200).json(result);
  } catch (error) {
    next(new AppError(getErrorMessage(error), getErrorStatus(error)));
  }
};
