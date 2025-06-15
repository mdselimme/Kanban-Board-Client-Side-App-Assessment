

import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuthContext = () => {
    const value = useContext(AuthContext);
    return value;
};

export default useAuthContext;