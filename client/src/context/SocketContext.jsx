import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider.jsx";
import io from "socket.io-client";

const socketContext = createContext();
export const useSocketContext = () => {
    return useContext(socketContext);
};

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { AuthUser } = useAuth();

    useEffect(() => {
        if (AuthUser) {
            const newSocket = io("http://localhost:7777", {
                query: {
                    userId: AuthUser._id,
                },
            });
            setSocket(newSocket);
            newSocket.on("getonlineusers", (users) => {
                setOnlineUsers(users);
            });

            return () => {
                newSocket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [AuthUser]);

    return (
        <socketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </socketContext.Provider>
    );
};

export default SocketProvider;