import React, { useState, useEffect } from 'react'
import { useAuth } from './AuthProvider';
import axios from 'axios';

const userGetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { AuthUser } = useAuth();

    useEffect(() => {
        const getallusers = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/api/user/getUsers', {
                    withCredentials: true
                });
                setAllUsers(response.data.allUsers || []);
            } catch (error) {
                console.error("Error fetching users: ", error);
            } finally {
                setLoading(false);
            }
        }
        if (AuthUser) getallusers();
    }, [AuthUser]);

    return {
        allUsers,
        loading
    }
}
export default userGetAllUsers