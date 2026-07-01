import React, { useEffect } from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';
import useconversations from '../../statemanage/useconversation';
import { useAuth } from '../../context/AuthProvider';

function Right() {
  const { selectedConversation, setSelectedConversation } = useconversations();
  const { AuthUser } = useAuth();

  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='w-full bg-slate-900 text-gray-300 flex flex-col h-full'>
      {!selectedConversation ? (
        <NoChatSelected AuthUser={AuthUser} />
      ) : (
        <>
          <Chatuser />
          <Messages />
          <Type />
        </>
      )}
    </div>
  )
}

const NoChatSelected = ({ AuthUser }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-4">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-slate-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-slate-300 text-center">
        Welcome, <span className="text-green-400">{AuthUser?.fullname || 'User'}</span> 👋
      </h1>
      <p className="text-xs md:text-sm text-slate-500 text-center">Select a conversation to start chatting</p>
    </div>
  );
};
export default Right
