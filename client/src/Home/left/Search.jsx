import React from 'react';
import { IoSearchCircleOutline } from "react-icons/io5";

function Search() {
    return (
            <div className='px-6 py-4'>
            <form action='' method=''>
                <div className='flex space-x-2' >
                <label className="input flex items-center gap-2 w-[80%]">
                    <input type="search" className="grow" placeholder="Search" />
                </label>
                <button>
                    <IoSearchCircleOutline className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300'/>
                </button>
                </div>
            </form>
        </div>
    )
}

export default Search