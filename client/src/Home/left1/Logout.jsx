import React from 'react'
import axios from 'axios'
import { MdLogout } from "react-icons/md";
import { useAuth } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
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
    }

    return (
        <>
            <div className='hidden md:flex w-[4%] bg-slate-950 text-white flex-col justify-end'>
                <div className='p-3 align-bottom'>
                    <button onClick={handleLogout}>
                        <MdLogout className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Logout;