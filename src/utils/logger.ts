// src/utils/logger.ts

export class Logger {
    static log(message: string): void {
      console.log(`[LOG]: ${message}`);
    }
  
    static info(message: string): void {
      console.info(`[INFO]: ${message}`);
    }
  
    static warn(message: string): void {
      console.warn(`[WARN]: ${message}`);
    }
  
    static error(message: string): void {
      console.error(`[ERROR]: ${message}`);
    }
  
    static debug(message: string): void {
      console.debug(`[DEBUG]: ${message}`);
    }
  }
  