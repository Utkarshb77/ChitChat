import { useEffect, useState } from "react";
import useconversations from "../statemanage/useconversation";
import axios from "axios";

function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useconversations();

    useEffect(() => {
        const getmessages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/message/get/${selectedConversation._id}`);
                setMessages(response.data.data || []);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log("Error in fetching messages: ", error);
            }
        };

        if (selectedConversation?._id) {
            getmessages();
        } else {
            setMessages([]);
        }
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
}

export default useGetMessage;