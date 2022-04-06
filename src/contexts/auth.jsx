import React, { createContext, useState, useEffect} from    'react';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //HOOK REACT ASSICRONO
    useEffect(() => {
        const recoverdUser = localStorage.getItem('user');

        if(recoverdUser){
            setUser(JSON.parse(recoverdUser));
            navigate('/');
        }

        setLoading(false);

    }, []);

    const login = (email, password) => {

        console.log('login auth', {email, password});

        //api [created uma session] == return user[token]
        const loggedUser = {
            id: '123',
            email: ''
        }

        localStorage.setItem("user", JSON.stringify(loggedUser));


        if(password === 'secret') {    
             setUser({ id: "123", email})
                navigate('/');
        } 

    }

    // user! = null   então => authenticated = true

    const logout = () => {
        console.log('logout');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}