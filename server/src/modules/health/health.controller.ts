import type { Request, Response } from 'express';

import { getHealthStatus } from './health.service.js';

export function healthCheckHandler(_request: Request, response: Response) {
  response.status(200).json(getHealthStatus());
}
