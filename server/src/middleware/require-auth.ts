import type { NextFunction, Request, Response } from 'express';

import { ApiError } from '../lib/api-error.js';
import { verifyAccessToken } from '../lib/jwt.js';

type AuthenticatedUser = {
  id: string;
  email: string;
  role: string;
};

declare module 'express-serve-static-core' {
  interface Request {
    user?: AuthenticatedUser;
  }
}

export function requireAuth(request: Request, _response: Response, next: NextFunction) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader?.startsWith('Bearer ')) {
    return next(new ApiError(401, 'Authentication required.'));
  }

  const token = authorizationHeader.slice(7);

  try {
    const payload = verifyAccessToken(token);
    request.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };

    return next();
  } catch {
    return next(new ApiError(401, 'Invalid or expired token.'));
  }
}
