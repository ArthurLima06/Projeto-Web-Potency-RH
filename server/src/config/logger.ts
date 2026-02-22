type LogLevel = "info" | "warn" | "error" | "debug";

const levels: Record<LogLevel, number> = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const currentLevel = (process.env.LOG_LEVEL as LogLevel) ?? "info";

function shouldLog(level: LogLevel): boolean {
  return levels[level] <= levels[currentLevel];
}

export const logger = {
  info: (message: string, meta?: unknown) => {
    if (shouldLog("info")) console.log(`[INFO] ${message}`, meta ?? "");
  },
  warn: (message: string, meta?: unknown) => {
    if (shouldLog("warn")) console.warn(`[WARN] ${message}`, meta ?? "");
  },
  error: (message: string, meta?: unknown) => {
    if (shouldLog("error")) console.error(`[ERROR] ${message}`, meta ?? "");
  },
  debug: (message: string, meta?: unknown) => {
    if (shouldLog("debug")) console.debug(`[DEBUG] ${message}`, meta ?? "");
  },
};
