'use client';

import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import userRegisterModal from '@/app/Hooks/UserRegisterModal';
import userLoginModal from '@/app/Hooks/UserLoginModal';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = userRegisterModal();
  const loginModal = userLoginModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='
        hidden md:block text-sm font-semibold py-3
        px-4 rounded-full hover:bg-neutral-100
        transition cursor-pointer'
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='
        p-4 md:py-1 md:px-2 border-[1px]
        border-neutral-200 flex flex-row
        items-center gap-3 rounded-full
        cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
        </div>
        <div className='hidden md:block'>
          <Avatar src={currentUser?.image} />
        </div>
      </div>

      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 left-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label='My trip' />
                <MenuItem onClick={() => {}} label='My favorites' />
                <MenuItem onClick={() => {}} label='My reservations' />
                <MenuItem onClick={() => {}} label='My properties' />
                <hr />
                <MenuItem onClick={() => signOut()} label='Logout' />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label='Login' />
                <MenuItem onClick={registerModal.onOpen} label='Sign Up' />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
