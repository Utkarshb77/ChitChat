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
            <div className='flex items-center gap-4 p-2 cursor-pointer hover:bg-slate-800'>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt={user.fullname} />
                    </div>
                </div>

                <div>
                    <h1 className='font-bold'>{user.fullname}</h1>
                    <span className='text-sm text-gray-500'>{user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default User
