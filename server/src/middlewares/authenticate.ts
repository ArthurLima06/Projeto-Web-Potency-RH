import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { verifyAccessToken } from "../utils/token";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}

export function authenticate(req: AuthenticatedRequest, _res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError("Authorization token is missing", 401, "UNAUTHORIZED");
  }

  const token = authHeader.replace("Bearer ", "").trim();
  const payload = verifyAccessToken(token);

  req.user = {
    userId: payload.userId,
    email: payload.email,
  };

  next();
}
