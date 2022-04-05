import React, { createContext, useState} from    'react';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (email, password) => {

        console.log('login auth', {email, password});

        if(password === 'secret') {    
             setUser({ id: "123", email})
                navigate('/');
        } 

    }

    // user! = null   então => authenticated = true

    const logout = () => {
        console.log('logout');
        setUser(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login}}>
            {children}
        </AuthContext.Provider>
    )
}