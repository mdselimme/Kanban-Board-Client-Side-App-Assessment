import {
    createBrowserRouter,
} from "react-router";
import App from "../../App"
import LogIn from "../AuthenticatePages/LogIn/LogIn";
import Register from "../AuthenticatePages/Register/Register";

// Configure React Router 
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/home",
                element: <App></App>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);