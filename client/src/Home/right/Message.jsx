import React from 'react';
import Messages from './Messages';
import useGetMessage from '../../context/useGetMessage';

function Message() {
  const { messages, loading } = useGetMessage();
  return (
    <>
      <div className="flex-1 overflow-y-auto p-4">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="loading loading-dots loading-lg text-green-400"></span>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-sm text-gray-500">Say Hii! 👋 Start the conversation</p>
          </div>
        ) : (
          messages.map((msg) => <Messages key={msg._id} message={msg} />)
        )}
      </div>
    </>
  )
}

export default Message