"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface UserContextType {
    token: string | null;
    user: any | null;
    login: (token: string, user: any) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<any | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Load session from localStorage on mount
        const savedToken = localStorage.getItem('taxable_token');
        const savedUser = localStorage.getItem('taxable_user');
        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (newToken: string, newUser: any) => {
        setToken(newToken);
        setUser(newUser);
        localStorage.setItem('taxable_token', newToken);
        localStorage.setItem('taxable_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('taxable_token');
        localStorage.removeItem('taxable_user');
        router.push('/signin');
    };

    return (
        <UserContext.Provider value={{ token, user, login, logout, isAuthenticated: !!token }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
