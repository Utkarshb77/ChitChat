import React from 'react';
import Chatuser from './Chatuser';
import Message from './Message';
import Type from './Type';
function Right() {
  return (
    <div className='w-[70%] bg-slate-900 text-white flex flex-col h-screen'>
        <Chatuser />
        <div className="flex-1 overflow-y-auto">
          <Message />
          <Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message />
        </div>
        <Type />
    </div>
  )
}

export default Right
