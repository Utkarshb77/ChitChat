import React from 'react'
import axios from 'axios'
import { MdLogout } from "react-icons/md";
import { useAuth } from '../../context/AuthProvider';

function Logout() {
    const { setAuthUser } = useAuth();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:7777/user/logout', {}, { withCredentials: true });
        } catch (error) {
            console.error(error);
        } finally {
            setAuthUser(null);
        }
    }

    return (
        <>
            <div className=' w-[4%] bg-slate-950 text-white flex flex-col justify-end'>
                <div className='p-3 align-bottom'>
                    <button onClick={handleLogout}>
                        <MdLogout className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Logout
