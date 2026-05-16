import type { NextFunction, Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

import { logger } from '../config/logger.js';
import { ApiError } from '../lib/api-error.js';

export function errorHandler(
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
) {
  void _next;

  if (error instanceof ApiError) {
    return response.status(error.statusCode).json({
      message: error.message,
      details: error.details,
    });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({
      message: 'Validation failed.',
      details: error.flatten(),
    });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return response.status(400).json({
      message: 'Database request failed.',
      code: error.code,
    });
  }

  logger.error('Unhandled error', error instanceof Error ? { message: error.message, stack: error.stack } : error);

  return response.status(500).json({
    message: 'Internal server error.',
  });
}
