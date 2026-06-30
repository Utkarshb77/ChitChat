import { useEffect } from 'react';
import { useSocketContext } from './SocketContext';
import useconversations from "../statemanage/useconversation";
import notificationSound from "../assets/notification.mp3";

function useGetSocketMessage() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useconversations();

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);
        return () => { socket.off("newMessage", handleNewMessage); }
    }, [socket, messages, setMessages])
}

export default useGetSocketMessage;
