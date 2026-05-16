import type { Request, Response } from 'express';

import { loginUser, registerUser } from './auth.service.js';

export async function registerHandler(request: Request, response: Response) {
  const result = await registerUser(request.body);

  response.status(201).json({
    message: 'User registered successfully.',
    data: result,
  });
}

export async function loginHandler(request: Request, response: Response) {
  const result = await loginUser(request.body);

  response.status(200).json({
    message: 'Login successful.',
    data: result,
  });
}
