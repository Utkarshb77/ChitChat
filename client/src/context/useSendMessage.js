import React, { useState } from 'react';
import useconversations from '../statemanage/useconversation';
import axios from 'axios';
import toast from 'react-hot-toast';

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useconversations();

    const sendmessages = async (message) => {
        setLoading(true);
        if (selectedConversation && selectedConversation._id) {
            try {
                const response = await axios.post(`/api/message/send/${selectedConversation._id}`, {
                    message: message
                }, {
                    withCredentials: true
                });
                setMessages([...messages, response.data]);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error('Failed to send message');
            }
        }
        setLoading(false);
    };

    return { loading, sendmessages };
}
export default useSendMessage;