// utils/logger.ts
enum LogLevel {
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  ERROR = 'ERROR',
}

function log(level: LogLevel, module: string, message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[${level}] [${module}] ${message}`);
}

export const Logger = {
  info: (module: string, message: string) => log(LogLevel.INFO, module, message),
  debug: (module: string, message: string) => log(LogLevel.DEBUG, module, message),
  error: (module: string, message: string) => log(LogLevel.ERROR, module, message),
};
