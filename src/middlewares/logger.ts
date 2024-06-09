// logger.ts

import { Request, Response, NextFunction } from 'express';

export class Logger {
  static async log(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
      next();
    } catch (error) {
      next(error);
    }
  }
}
