import React from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import useGetMessage from '../../context/useGetMessage';
function Message() {
  const { messages, loading } = useGetMessage();
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-sm text-gray-500">Say Hii!</p>
        ) : (
          messages.map((msg) => <Messages key={msg._id} message={msg} />)
        )}
      </div>
    </>
  )
}

export default Message