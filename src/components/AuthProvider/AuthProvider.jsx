import React, { createContext, useEffect, useState } from 'react';
import useAxiosUrl from '../hooks/useAxiosUrl';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [todosByUser, setTodosByUser] = useState([]);
    const [callFetch, setCallFetch] = useState(false);
    const [openUpdateTask, setOpenUpdateTask] = useState(false);
    const [singleTodo, setSingleTodo] = useState(null);

    // Set state for login and token check 
    useEffect(() => {
        const tokenExists = localStorage.getItem('token');
        const userExists = localStorage.getItem("user");
        if (tokenExists) {
            const parseUser = JSON.parse(userExists);
            setUser(parseUser);
            setLoggedIn(true);
            return;
        } else {
            setLoggedIn(false);
            setUser(null);
        }
    }, []);

    // fetch todos by user wise 
    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                const response = await useAxiosUrl.get(`/todos/user-todo/${user.id}`);
                const todos = await response.data;
                setTodosByUser(todos);
                setCallFetch(false);
            };
            fetchData();
            return;
        } else {
            setTodosByUser([])
        }

    }, [user, callFetch])


    const authValue = {
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        todosByUser,
        setCallFetch,
        setTodosByUser,
        setOpenUpdateTask,
        openUpdateTask,
        singleTodo,
        setSingleTodo
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )


};

export default AuthProvider;