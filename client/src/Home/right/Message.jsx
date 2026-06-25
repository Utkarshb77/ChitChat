import React from 'react'
import { useAuth } from '../../context/AuthProvider'

function Message({ message }) {
  const { AuthUser } = useAuth();
  const itsMe = message.senderId === AuthUser._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className={`chat ${chatName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Chat avatar"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50 ml-1">{formattedTime}</time>
        </div>
        <div className={`chat-bubble ${chatColor}`}>
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default Message