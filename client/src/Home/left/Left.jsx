import React from 'react';
import Search from './Search';
import Users from './Users';
import { MdLogout } from "react-icons/md";
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

function Chats() {
  const { setAuthUser } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post('/api/user/logout', {}, { withCredentials: true });
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    } finally {
      setAuthUser(null);
    }
  };

  return (
    <div className='w-full bg-black text-white flex flex-col h-full'>
      <div className='flex items-center justify-between p-2 px-4 md:px-5'>
        <img src='/logo.png' alt='ChitChat' className='h-12 w-auto object-contain' />
        <button onClick={handleLogout} className='md:hidden'>
          <MdLogout className='text-4xl p-1.5 hover:bg-gray-600 rounded-lg duration-300' />
        </button>
      </div>
      <Search />
      <hr></hr>
      <Users />
    </div>
  )
}

export default Chats