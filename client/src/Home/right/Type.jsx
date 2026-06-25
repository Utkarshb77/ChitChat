import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import useConversation from '../../statemanage/useconversation';
import useSendMessage from '../../context/useSendMessage';

function Type() {
    const [message, setMessage] = useState('');
    const { loading, sendmessages } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim() || !selectedConversation?._id) return;

        setLoading(true);
        try {
            const response = await axios.post(`/api/message/send/${selectedConversation._id}`, {
                message: message.trim(),
            }, { withCredentials: true });

            setMessages([...messages, response.data]);
            setMessage('');
        } catch (error) {
            console.log("Error sending message: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex space-x-1 h-[8vh] bg-gray-800">
                <div className="flex-grow p-2">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full outline-none bg-slate-900 px-4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit" className='shrink-0 text-slate-300 hover:bg-gray-600 rounded-full duration-300' disabled={loading}>
                    <IoSend className='text-5xl p-2' />
                </button>
            </div>
        </form>
    )
}

export default Type
