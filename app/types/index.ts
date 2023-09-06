import { User } from '@prisma/client';

export type SafeUser = Omit<
  User,
  'ceatedAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
