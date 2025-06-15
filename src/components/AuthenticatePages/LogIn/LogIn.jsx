import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import "./Login.css";
import { Link, useNavigate } from "react-router";
import { useRef, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";



const LogIn = () => {

    const [seePass, setSeePass] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const { setLoggedIn } = useAuth();

    const handleLogInSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        try {
            const response = await useAxiosUrl.post('/users/login', { email, password });
            const resp = await response.data;
            if (resp.token) {
                setLoggedIn(true);
                Swal.fire({
                    icon: "success",
                    title: resp.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                localStorage.setItem("token", resp.token);
                localStorage.setItem("user", JSON.stringify(resp.user));
                navigate('/');
            };
            console.log(resp);
        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <section>
            <div className='w-[35rem] mt-24 rounded-4xl p-16 mx-auto bg-[rgba(148,12,245,0.05)]'>
                <h1 className="text-4xl text-center font-bold mb-10 text-[#04141E]">Login</h1>
                <form onSubmit={handleLogInSubmit}>
                    <div className="border-b border-[#E3E3E3] pb-2">
                        <label htmlFor="email" className="text-base font-medium text-[#04141E]">Email</label>
                        <div className="flex items-center mt-3">
                            <MdEmail className="mr-2 text-xl" />
                            <input ref={emailRef} name="email" id="email" className="w-full text-lg login-input" type="email" placeholder='Type your valid email here' />
                        </div>
                    </div>
                    <div className="border-b border-[#E3E3E3] pb-2 mt-8">
                        <label htmlFor="password" className="text-base font-medium text-[#04141E]">Password</label>
                        <div className="flex items-center mt-3">
                            <FaLock className="mr-2" />
                            <input ref={passwordRef} name="password" id="password" className="w-full text-lg login-input" type={seePass ? "text" : "password"} placeholder='Type your valid password here' />
                            <span onClick={() => setSeePass(!seePass)}>
                                {
                                    seePass ? <IoEyeOff className="text-xl" /> : <FaEye className="text-xl" />
                                }
                            </span>
                        </div>
                    </div>
                    <p className="text-end py-4 cursor-pointer text-base text-gray-500 hover:underline">Forget Password</p>
                    <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 w-full text-center me-2 mb-2 ">Log In</button>
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