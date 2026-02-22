import { Request, Response } from "express";
import { authService } from "../services/authService";
import { AuthenticatedRequest } from "../middlewares/authenticate";
import { AppError } from "../utils/AppError";
import { sendSuccess } from "../utils/apiResponse";

export const authController = {
  async register(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body as {
      name?: string;
      email?: string;
      password?: string;
    };

    if (!name || !email || !password) {
      throw new AppError("name, email and password are required", 400, "VALIDATION_ERROR");
    }

    const result = await authService.register({ name, email, password });
    return sendSuccess(res, result, "User registered successfully", 201);
  },

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as { email?: string; password?: string };

    if (!email || !password) {
      throw new AppError("email and password are required", 400, "VALIDATION_ERROR");
    }

    const result = await authService.login({ email, password });
    return sendSuccess(res, result, "Login successful");
  },

  async refresh(req: Request, res: Response): Promise<Response> {
    const { refreshToken } = req.body as { refreshToken?: string };

    if (!refreshToken) {
      throw new AppError("refreshToken is required", 400, "VALIDATION_ERROR");
    }

    const tokens = await authService.refreshToken(refreshToken);
    return sendSuccess(res, tokens, "Token refreshed");
  },

  async logout(req: AuthenticatedRequest, res: Response): Promise<Response> {
    if (!req.user) {
      throw new AppError("Unauthorized", 401, "UNAUTHORIZED");
    }

    await authService.revokeRefreshTokenByUserId(req.user.userId);
    return sendSuccess(res, { loggedOut: true }, "Logout successful");
  },

  async me(req: AuthenticatedRequest, res: Response): Promise<Response> {
    if (!req.user) {
      throw new AppError("Unauthorized", 401, "UNAUTHORIZED");
    }

    const user = await authService.getUserById(req.user.userId);
    return sendSuccess(res, user);
  },
};
