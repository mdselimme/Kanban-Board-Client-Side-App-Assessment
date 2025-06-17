import {
    createBrowserRouter,
} from "react-router";
import App from "../../App"
import LogIn from "../AuthenticatePages/LogIn/LogIn";
import Register from "../AuthenticatePages/Register/Register";
import Home from "../Home/Home";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

// Configure React Router 
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
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