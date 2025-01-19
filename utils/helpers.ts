import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect('/');
  return user;
};

export const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect('/');
  return user;
};

export const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};
