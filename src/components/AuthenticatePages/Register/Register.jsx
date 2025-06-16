import { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import Swal from "sweetalert2";
const Register = () => {

    const [seePass, setSeePass] = useState(false);

    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    // Register Account Function 
    const handleRegisterAccount = async (e) => {
        e.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        try {
            const response = await useAxiosUrl.post('/users/register', { fullName, email, password });
            const resp = await response.data;
            if (resp.success) {
                Swal.fire({
                    icon: "success",
                    title: resp.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/login');
            };
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    return (
        <section>
            <div className='w-[35rem] mt-20 rounded-4xl p-16 mx-auto bg-[rgba(148,12,245,0.05)]'>
                <h1 className="text-4xl text-center font-bold mb-10 text-[#04141E]">Register</h1>
                <form onSubmit={handleRegisterAccount}>
                    {/* Fullname Input  */}
                    <div className="border-b border-[#E3E3E3] pb-2">
                        <label htmlFor="name" className="text-base font-medium text-[#04141E]">Name</label>
                        <div className="flex items-center mt-3">
                            <FaUser className="mr-2" />
                            <input ref={fullNameRef} id="name" className="w-full text-lg login-input" type="text" placeholder='Type your fullname here' />
                        </div>
                    </div>
                    {/* Email Input  */}
                    <div className="border-b border-[#E3E3E3] pb-2 mt-8">
                        <label htmlFor="email" className="text-base font-medium text-[#04141E]">Email</label>
                        <div className="flex items-center mt-3">
                            <MdEmail className="mr-2 text-xl" />
                            <input ref={emailRef} id="email" className="w-full text-lg login-input" type="email" placeholder='Type your valid email here' />
                        </div>
                    </div>
                    {/* PassWord Input  */}
                    <div className="border-b border-[#E3E3E3] pb-2 mt-8">
                        <label htmlFor="password" className="text-base font-medium text-[#04141E]">Password</label>
                        <div className="flex items-center mt-3">
                            <FaLock className="mr-2" />
                            <input ref={passwordRef} id="password" className="w-full text-lg login-input" type={seePass ? "text" : "password"} placeholder='Type your valid password here' />
                            <span onClick={() => setSeePass(!seePass)}>
                                {
                                    seePass ? <IoEyeOff className="text-xl" /> : <FaEye className="text-xl" />
                                }
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="mt-8 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 w-full text-center me-2 mb-2 ">Register User</button>
                </form>
                <div>
                    <p className="text-center py-4 cursor-pointer text-base text-gray-500">Already Have An Account ? <Link className="underline hover:text-[#9E26FD]" to={'/login'}>
                        Login Here
                    </Link></p>
                </div>
            </div>
        </section>
    );
};

export default Register;