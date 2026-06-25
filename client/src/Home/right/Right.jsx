import React, { useEffect } from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';
import useconversations from '../../statemanage/useconversation';
import { useAuth } from '../../context/AuthProvider';

function Right() {
  const { selectedConversation, setSelectedConversation } = useconversations();
  const { AuthUser } = useAuth();

  // Reset selected conversation on mount (login/page load)
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='w-[70%] bg-slate-900 text-gray-300'>
      <div>
        {!selectedConversation ? (
          <NoChatSelected AuthUser={AuthUser} />
        ) : (
          <>
            <Chatuser />
            <div className="flex-1 overflow-y-auto" style={{ minHeight: "calc(92vh - 8vh)" }}>
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  )
}

const NoChatSelected = ({ AuthUser }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-slate-300">
        Welcome, <span className="text-green-400">{AuthUser?.fullname || 'User'}</span> 👋
      </h1>
      <p className="text-sm text-slate-500">Select a conversation from the left to start chatting</p>
    </div>
  );
};
export default Right
