import { useEffect } from 'react';
import { useSocketContext } from './SocketContext';
import useconversations from "../statemanage/useconversation";
import notification from "../assets/notification.mp3";

function useGetSocketMessage() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useconversations();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            const notification = new Audio(sound);
            notification.play();
        })

        socket.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage]);
        });
        return () => { socket.off("newMessage"); }
    }, [socket, messages, setMessages])
}

export default useGetSocketMessage;
