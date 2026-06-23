import React from 'react';
import Chatuser from './Chatuser';
import Message from './Message';
import Type from './Type';
import useconversations from '../../statemanage/useconversation';

function Right() {
  const { selectedConversation } = useconversations();

  return (
    <div className='w-[70%] bg-slate-900 text-white flex flex-col h-screen'>
      {!selectedConversation ? (
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-xl font-semibold text-gray-400">Select a user to start chatting</h1>
        </div>
      ) : (
        <>
          <Chatuser />
          <div className="flex-1 overflow-y-auto">
            <Message />
          </div>
          <Type />
        </>
      )}
    </div>
  )
}

export default Right
