import { Link } from "react-router";


const Navbar = () => {
    return (
        <section className="container mx-auto py-10">
            <div className="navbar-body flex justify-between items-center">
                <div className="navbar-left-logo">
                    <Link to={'/'}>
                        <h1 className="text-4xl font-bold"><span className="text-[#00C54E]">Kanban</span><span className="text-[#9108F0]">Board.</span></h1>
                    </Link>
                </div>
                <div className="navbar-right-auth">
                    <Link to={'/login'}>
                        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In</button>
                    </Link>
                    <Link to={'/register'}>
                        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Navbar;