import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env";
import { corsMiddleware } from "./config/cors";
import { apiRateLimiter } from "./config/rateLimiter";
import routes from "./routes";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(corsMiddleware);
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
  app.use(apiRateLimiter);

  app.use(env.apiPrefix, routes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
