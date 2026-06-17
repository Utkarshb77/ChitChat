import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [AuthUser, setAuthUser] = useState(() => {
        try {
            const stored = localStorage.getItem('authUser');
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (AuthUser) {
            localStorage.setItem('authUser', JSON.stringify(AuthUser));
        } else {
            localStorage.removeItem('authUser');
        }
    }, [AuthUser]);

    return (
        <AuthContext.Provider value={{ AuthUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);