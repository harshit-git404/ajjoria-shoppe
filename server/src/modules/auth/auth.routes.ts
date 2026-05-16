import { Router } from 'express';

import { asyncHandler } from '../../lib/async-handler.js';
import { validateRequest } from '../../middleware/validate-request.js';
import { loginHandler, registerHandler } from './auth.controller.js';
import { loginSchema, registerSchema } from './auth.schema.js';

const authRouter = Router();

authRouter.post('/register', validateRequest(registerSchema), asyncHandler(registerHandler));
authRouter.post('/login', validateRequest(loginSchema), asyncHandler(loginHandler));

export { authRouter };
