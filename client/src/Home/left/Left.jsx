import React from 'react';
import Search from './Search';
import Users from './Users';
function Chats() {
  return (
    <div className='w-[30%] bg-black text-white flex flex-col h-full'>
      <h1 className='font-bold text-2xl p-2 px-11'>ChitChat</h1>
      <Search />
      <hr></hr>
      <Users />

    </div>
  )
}

export default Chats