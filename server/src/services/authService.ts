import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { env } from "../config/env";
import { AppError } from "../utils/AppError";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/token";
import { AuthTokens, PublicUser, UserRecord } from "../types";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

const users: UserRecord[] = [];
const refreshTokenStore = new Map<string, string>();

function toPublicUser(user: UserRecord): PublicUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

async function persistRefreshToken(userId: string, refreshToken: string): Promise<void> {
  const hash = await bcrypt.hash(refreshToken, env.bcryptSaltRounds);
  refreshTokenStore.set(userId, hash);
}

async function buildTokens(user: UserRecord): Promise<AuthTokens> {
  const payload = { userId: user.id, email: user.email };
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  await persistRefreshToken(user.id, refreshToken);

  return { accessToken, refreshToken };
}

export const authService = {
  async register(input: RegisterInput): Promise<{ user: PublicUser; tokens: AuthTokens }> {
    const email = input.email.toLowerCase().trim();

    const exists = users.some((user) => user.email === email);
    if (exists) {
      throw new AppError("Email already registered", 409, "EMAIL_ALREADY_EXISTS");
    }

    const passwordHash = await bcrypt.hash(input.password, env.bcryptSaltRounds);
    const newUser: UserRecord = {
      id: randomUUID(),
      name: input.name.trim(),
      email,
      passwordHash,
    };

    users.push(newUser);
    const tokens = await buildTokens(newUser);

    return {
      user: toPublicUser(newUser),
      tokens,
    };
  },

  async login(input: LoginInput): Promise<{ user: PublicUser; tokens: AuthTokens }> {
    const email = input.email.toLowerCase().trim();
    const user = users.find((item) => item.email === email);

    if (!user) {
      throw new AppError("Invalid credentials", 401, "INVALID_CREDENTIALS");
    }

    const passwordMatches = await bcrypt.compare(input.password, user.passwordHash);
    if (!passwordMatches) {
      throw new AppError("Invalid credentials", 401, "INVALID_CREDENTIALS");
    }

    const tokens = await buildTokens(user);

    return {
      user: toPublicUser(user),
      tokens,
    };
  },

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    const payload = verifyRefreshToken(refreshToken);
    const tokenHash = refreshTokenStore.get(payload.userId);

    if (!tokenHash) {
      throw new AppError("Invalid refresh token", 401, "INVALID_REFRESH_TOKEN");
    }

    const validToken = await bcrypt.compare(refreshToken, tokenHash);
    if (!validToken) {
      throw new AppError("Invalid refresh token", 401, "INVALID_REFRESH_TOKEN");
    }

    const user = users.find((item) => item.id === payload.userId);
    if (!user) {
      throw new AppError("User not found", 404, "USER_NOT_FOUND");
    }

    return buildTokens(user);
  },

  async revokeRefreshTokenByUserId(userId: string): Promise<void> {
    refreshTokenStore.delete(userId);
  },

  async getUserById(userId: string): Promise<PublicUser> {
    const user = users.find((item) => item.id === userId);
    if (!user) {
      throw new AppError("User not found", 404, "USER_NOT_FOUND");
    }

    return toPublicUser(user);
  },
};
