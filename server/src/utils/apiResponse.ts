import { Response } from "express";

export function sendSuccess<T>(res: Response, data: T, message?: string, statusCode = 200): Response {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function sendError(
  res: Response,
  error: { code: string; message: string; details?: unknown },
  statusCode = 400,
): Response {
  return res.status(statusCode).json({
    success: false,
    error,
  });
}
