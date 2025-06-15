

import React, { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('token');
        if (data) {
            setLoggedIn(true)
            return;
        }
        setLoggedIn(false);
    }, []);


    const authValue = {
        loggedIn, setLoggedIn
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )


};

export default AuthProvider;