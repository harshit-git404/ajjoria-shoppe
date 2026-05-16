import { Router } from 'express';

import { healthCheckHandler } from './health.controller.js';

const healthRouter = Router();

healthRouter.get('/', healthCheckHandler);

export { healthRouter };
