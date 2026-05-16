import bcrypt from 'bcryptjs';

import { prisma } from '../../config/prisma.js';
import { ApiError } from '../../lib/api-error.js';
import { signAccessToken } from '../../lib/jwt.js';

export async function registerUser(input: {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}) {
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existingUser) {
    throw new ApiError(409, 'A user with this email already exists.');
  }

  const passwordHash = await bcrypt.hash(input.password, 12);
  const user = await prisma.user.create({
    data: {
      email: input.email,
      passwordHash,
      firstName: input.firstName,
      lastName: input.lastName,
    },
  });

  return {
    user,
    accessToken: signAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    }),
  };
}

export async function loginUser(input: { email: string; password: string }) {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (!user) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  const passwordMatches = await bcrypt.compare(input.password, user.passwordHash);

  if (!passwordMatches) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  return {
    user,
    accessToken: signAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    }),
  };
}
