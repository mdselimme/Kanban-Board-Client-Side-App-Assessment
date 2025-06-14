import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router";
const LogIn = () => {
    return (
        <section>
            <div className='w-[35rem] mt-24 rounded-4xl p-16 mx-auto bg-[rgba(148,12,245,0.05)]'>
                <h1 className="text-4xl text-center font-bold mb-10 text-[#04141E]">Login</h1>
                <form>
                    <div className="border-b border-[#E3E3E3] pb-2">
                        <label htmlFor="email" className="text-base font-medium text-[#04141E]">Email</label>
                        <div className="flex items-center mt-3">
                            <FaUser className="mr-2" />
                            <input id="email" className="w-full text-lg login-input" type="email" placeholder='Type your valid email here' />
                        </div>
                    </div>
                    <div className="border-b border-[#E3E3E3] pb-2 mt-8">
                        <label htmlFor="password" className="text-base font-medium text-[#04141E]">Password</label>
                        <div className="flex items-center mt-3">
                            <FaLock className="mr-2" />
                            <input id="password" className="w-full text-lg login-input" type="password" placeholder='Type your valid password here' />
                        </div>
                    </div>
                    <p className="text-end py-4 cursor-pointer text-base text-gray-500 hover:underline">Forget Password</p>
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 w-full text-center me-2 mb-2 ">Log In</button>
                </form>
                <div>
                    <p className="text-center py-4 cursor-pointer text-base text-gray-500">No Account ? <Link className="underline hover:text-[#9E26FD]" to={'/register'}>
                        Register Here
                    </Link></p>
                </div>
            </div>
        </section>
    );
};

export default LogIn;