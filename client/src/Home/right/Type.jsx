import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import useconversations from '../../statemanage/useconversation';

function Type() {
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const { selectedConversation, messages, setMessages } = useconversations();

    const handleSend = async (e) => {
        e.preventDefault();
        if (!message.trim() || !selectedConversation?._id) return;

        setSending(true);
        try {
            const response = await axios.post(`/api/message/send/${selectedConversation._id}`, {
                message: message.trim(),
            }, { withCredentials: true });

            setMessages([...messages, response.data.data]);
            setMessage('');
        } catch (error) {
            console.log("Error sending message: ", error);
        } finally {
            setSending(false);
        }
    };

    return (
        <form onSubmit={handleSend} className="flex items-center gap-2 p-2">
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered flex-1 outline-none bg-slate-800"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className='shrink-0 text-slate-300 hover:bg-gray-600 rounded-full duration-300' disabled={sending}>
                <IoSend className='text-5xl p-2' />
            </button>
        </form>
    )
}

export default Type
