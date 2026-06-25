import React from 'react'
import useconversations from '../../statemanage/useconversation'
import { useSocketContext } from '../../context/SocketContext'


function Chatuser() {
    const { selectedConversation } = useconversations();

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(selectedConversation?._id);

    return (
        <>
            <div className='pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300'>
                <div>
                    <div className={`avatar ${isOnline ? "online" : ""}`}>
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt={selectedConversation?.fullname} />
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-lg'>{selectedConversation?.fullname || 'Select a user'}</h1>
                    <span className={`text-sm ${isOnline ? "text-green-500" : "text-gray-500"}`}>{isOnline ? "Online" : "Offline"}</span>
                </div>
            </div>
        </>
    )
}
export default Chatuser
