import React from 'react'
import useconversations from '../../statemanage/useconversation'
import { useSocketContext } from '../../context/SocketContext'
import { IoArrowBack } from "react-icons/io5";


function Chatuser() {
    const { selectedConversation, setSelectedConversation } = useconversations();

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(selectedConversation?._id);

    return (
        <>
            <div className='pl-3 md:pl-5 pt-3 md:pt-5 h-[10vh] md:h-[12vh] flex items-center space-x-3 md:space-x-4 bg-gray-700 hover:bg-gray-600 duration-300'>
                <button
                    onClick={() => setSelectedConversation(null)}
                    className='md:hidden flex-shrink-0'
                >
                    <IoArrowBack className='text-2xl text-gray-300 hover:text-white' />
                </button>

                <div>
                    <div className={`avatar ${isOnline ? "online" : ""}`}>
                        <div className="w-10 md:w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt={selectedConversation?.fullname} />
                        </div>
                    </div>
                </div>

                <div className='min-w-0'>
                    <h1 className='font-bold text-base md:text-lg truncate'>{selectedConversation?.fullname || 'Select a user'}</h1>
                    <span className={`text-xs md:text-sm ${isOnline ? "text-green-500" : "text-gray-500"}`}>{isOnline ? "Online" : "Offline"}</span>
                </div>
            </div>
        </>
    )
}
export default Chatuser
