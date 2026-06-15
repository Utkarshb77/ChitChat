import React from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
function Message() {
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>
      {/* <Messages />
    <Messages />
    <Messages />
    <Messages />
    <Messages />
    <Messages />
    <Messages />
    <Messages /> */}
    </>
  )
}

export default Message