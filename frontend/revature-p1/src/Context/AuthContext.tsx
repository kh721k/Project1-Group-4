import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

interface contextMethods {
    jwtToken:string | null;
    user: string;
    login: (data) => void;
    logout: () => void;
}

export const AuthContext = createContext<contextMethods | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState("");
    const [jwtToken, setJwtToken] = useState("");

    useEffect(() => {
        const currUser = localStorage.getItem('user');
        const currSessionToken = getCookie('Authentication');
        if (currUser) {
            setUser(JSON.parse(currUser));
        }
        if (currSessionToken) {
            setJwtToken(currSessionToken);
        }
    }, []);

    const login = (data: any) => {
        setUser(data.user);
        setJwtToken(data.Authentication);
        localStorage.setItem('user', JSON.stringify(data.user));
        setCookie('Authentication', data.Authentication, { expires: 600, path: '/' });
    };

    const logout = () => {
        setUser("");
        setJwtToken("");
        localStorage.removeItem('user');
        removeCookie('Authentication', { path: '/' });
    };

    return (
        <AuthContext.Provider value={{jwtToken, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const sessionContext = useContext(AuthContext);
    if (!sessionContext) {
        throw new Error('AuthProvider was never used');
    }
    return sessionContext;
};
