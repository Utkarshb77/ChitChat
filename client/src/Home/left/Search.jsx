import React, { useState } from 'react';
import { IoSearchCircleOutline } from "react-icons/io5";
import useGetAllUsers from '../../context/userGetAllUsers.jsx';
import useconversations from '../../statemanage/useconversation.js';
import toast from 'react-hot-toast';
function Search() {
    const [search, setSearch] = useState('');
    const { allUsers } = useGetAllUsers();
    const { setSelectedConversation } = useconversations();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search.trim()) return;
        const conversation = allUsers.find((user) => user.fullname.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        } else {
            toast.error("No user found");
        }
    }

    return (
        <div className='px-6 py-4'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='flex space-x-2' >
                    <label className="input flex items-center gap-2 w-[80%]">
                        <input type="search" className="grow" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </label>
                    <button>
                        <IoSearchCircleOutline className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search