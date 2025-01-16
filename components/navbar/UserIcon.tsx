import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { User2Icon } from 'lucide-react';
import Image from 'next/image';

async function UserIcon() {
  const user = await currentUser();
  const image = user?.imageUrl;
  if (image) {
    return (
      <Image
        src={image}
        alt="profile picture"
        className="w-6 h-6 rounded-full object-cover"
        width={40}
        height={40}
      />
    );
  }

  return <User2Icon className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
