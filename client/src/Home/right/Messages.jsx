import React from 'react'

function Messages({ message }) {
  return (
    <div >
      <div className="chat chat-start">
        <div className="chat-bubble">
          {message.message}
        </div>
      </div>
    </div>
  )
}

export default Messages