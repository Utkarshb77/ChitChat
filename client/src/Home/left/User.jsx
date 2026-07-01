import React from 'react'
import useconversations from '../../statemanage/useconversation'
import { useSocketContext } from '../../context/SocketContext'

function User({ user }) {
    const { selectedConversation, setSelectedConversation } = useconversations();
    const isSelected = selectedConversation?._id === user._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(user._id);

    if (!user) return null;
    return (
        <div className={`hover:bg-slate-700 duration-200 ${isSelected ? "bg-slate-700" : ""}`} onClick={() => setSelectedConversation(user)}>
            <div className='flex items-center gap-3 md:gap-4 p-2 px-3 md:px-2 cursor-pointer hover:bg-slate-800'>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 md:w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt={user.fullname} />
                    </div>
                </div>

                <div className='min-w-0 flex-1'>
                    <h1 className='font-bold text-sm md:text-base truncate'>{user.fullname}</h1>
                    <span className='text-xs md:text-sm text-gray-500 truncate block'>{user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default User
