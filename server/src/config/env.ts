import dotenv from "dotenv";

dotenv.config();

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  apiPrefix: process.env.API_PREFIX ?? "/api/v1",
  corsOrigin: required("CORS_ORIGIN", "http://localhost:8080"),
  accessTokenSecret: required("ACCESS_TOKEN_SECRET", "dev_access_secret_change_me"),
  refreshTokenSecret: required("REFRESH_TOKEN_SECRET", "dev_refresh_secret_change_me"),
  accessTokenExpiresIn: required("ACCESS_TOKEN_EXPIRES_IN", "15m"),
  refreshTokenExpiresIn: required("REFRESH_TOKEN_EXPIRES_IN", "7d"),
  bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS ?? 10),
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX ?? 100),
  logLevel: process.env.LOG_LEVEL ?? "info",
};
