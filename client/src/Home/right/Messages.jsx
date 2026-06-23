import React from 'react'
import { useAuth } from '../../context/AuthProvider'

function Messages({ message }) {
  const { AuthUser } = useAuth();
  const isSender = message.sender === AuthUser._id;

  const time = message.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : '';

  return (
    <div>
      <div className={`chat ${isSender ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Chat avatar"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          {isSender ? 'You' : 'Them'}
          <time className="text-xs opacity-50 ml-1">{time}</time>
        </div>
        <div className={`chat-bubble ${isSender ? 'chat-bubble-primary' : ''}`}>
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default Messages