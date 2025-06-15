

import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuth = () => {
    const value = useContext(AuthContext);
    return value;
};

export default useAuth;