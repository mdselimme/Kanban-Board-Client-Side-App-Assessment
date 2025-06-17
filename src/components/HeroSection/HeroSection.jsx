import React from 'react';
import HeroImage from "../../assets/images/her-banner.png";
import { Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
    return (
        <div className="home-main grid grid-cols-1 md:grid-cols-2 items-center py-4">
            <div className="home-left order-2 md:order-1 text-center md:text-left">
                <h1 className="text-3xl text-center md:text-left md:text-8xl font-bold leading-10 md:leading-28 mb-5 text-[#04141E]">Smarter <br /> Scheduling <br /> System</h1>
                <p className="text-[#04141E] text-base py-5 leading-9">Deffine Creates the perfect schedule for <br /> your priorities, saving you up to 40%</p>

                <Link to={'/login'}>
                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-10 py-5 text-center me-2 mb-2">
                        Add Your Task
                        <GoArrowUpRight className="ml-5 bg-white text-lg text-black
                            rounded-2xl inline-block" />
                    </button>
                </Link>

            </div>
            <div className="home-right order-1 md:order-2">
                <img src={HeroImage} className="w-full" alt="hero-task-image" />
            </div>
        </div>
    );
};

export default HeroSection;