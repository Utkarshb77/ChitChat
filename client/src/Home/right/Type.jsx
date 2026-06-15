import React from 'react'
import { IoSend } from "react-icons/io5";

function Type() {
    return (
        <div className="flex items-center gap-2 p-2">
            <input type="text" placeholder="Type here" className="input input-bordered flex-1 outline-none bg-slate-800" />
            <button className='shrink-0 text-slate-300 hover:bg-gray-600 rounded-full duration-300'>
                <IoSend className='text-5xl p-2' />
            </button>
        </div>
    )
}

export default Type
