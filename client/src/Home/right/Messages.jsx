import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../context/useGetMessage';
import Loading from '../../components/loading';

function Messages() {
  const { loading, messages } = useGetMessage();

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4" style={{ minHeight: "calc(92vh - 8vh)" }}>
      {loading ? (
        <Loading />
      ) : messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-sm text-gray-500">Say Hii! 👋 Start the conversation</p>
        </div>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} ref={lastMsgRef}>
            <Message message={msg} />
          </div>
        ))
      )}
    </div>
  )
}

export default Messages