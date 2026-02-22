import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger";

const app = createApp();

app.listen(env.port, () => {
  logger.info(`Server running on http://localhost:${env.port}${env.apiPrefix}`);
});
