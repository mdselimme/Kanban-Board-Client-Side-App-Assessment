import { Link, useNavigate } from "react-router";
import useAxiosUrl from "../hooks/useAxiosUrl";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const Navbar = () => {

    const { loggedIn, setLoggedIn, setUser } = useAuth();
    const navigate = useNavigate();

    // Log Out User 
    const handleLogOutUser = async () => {
        try {
            const response = await useAxiosUrl.post('/users/logout');
            const data = await response.data;
            if (data.success) {
                setLoggedIn(false);
                setUser(null);
                // Show Alert After LogOut 
                Swal.fire({
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                // Navigate to login Page After logout and remove token and users data 
                navigate('/login')
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    return (
        <section className="container mx-auto py-10">
            <div className="navbar-body flex justify-between items-center">
                {/* header Logo  */}
                <div className="navbar-left-logo">
                    <Link to={'/'}>
                        <h1 className="text-4xl font-bold"><span className="text-[#00C54E]">Kanban</span><span className="text-[#9108F0]">Board.</span></h1>
                    </Link>
                </div>
                {/* Header Button  */}
                <div className="navbar-right-auth">
                    {
                        loggedIn ?
                            <>
                                {/* LogOut button  */}
                                <button onClick={handleLogOutUser} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LogOut</button>
                            </>
                            :
                            <>
                                {/* Login Button  */}
                                <Link to={'/login'}>
                                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In</button>
                                </Link>
                                {/* Register Button  */}
                                <Link to={'/register'}>
                                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Navbar;