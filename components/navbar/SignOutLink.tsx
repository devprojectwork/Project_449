'use client';

import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner'; // ✅ Import Sonner's toast

function SignOutLink() {
  const handleLogout = () => {
    toast("You have been signed out."); // ✅ Use Sonner directly
  };

  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
