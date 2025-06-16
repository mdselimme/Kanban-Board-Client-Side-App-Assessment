

import React, { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const tokenExists = localStorage.getItem('token');
        const userExists = localStorage.getItem("user");
        if (tokenExists && userExists) {
            const parseUser = JSON.parse(userExists);
            setUser(parseUser);
            setLoggedIn(true);
            return;
        } else {
            setLoggedIn(false);
            setUser(null);
        }

    }, []);


    const authValue = {
        loggedIn, setLoggedIn, user
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )


};

export default AuthProvider;