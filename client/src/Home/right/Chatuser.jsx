import React from 'react'
import useconversations from '../../statemanage/useconversation'

function Chatuser() {
    const { selectedConversation } = useconversations();

    return (
        <>
            <div className='flex space-x-4 p-2 items-center border-b-2 border-green-200 bg-slate-950'>
                <div >
                    <div className="avatar avatar-online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt={selectedConversation?.name} />
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-lg'>{selectedConversation?.name || 'Select a user'}</h1>
                    <span className='text-sm text-green-500'>Online</span>
                </div>
            </div>
        </>
    )
}
export default Chatuser
