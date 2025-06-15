
import { Link } from "react-router";
import HeroImage from "../../assets/images/her-banner.png";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
    return (
        <section className='container mx-auto'>
            <div className="home-main grid grid-cols-2 items-center py-4">
                <div className="home-left">
                    <h1 className="text-8xl font-bold leading-28 mb-5 text-[#04141E]">Smarter <br /> Scheduling <br /> System</h1>
                    <p className="text-[#04141E] text-base py-5 leading-9">Deffine Creates the perfect schedule for <br /> your priorities, saving you up to 40%</p>
                    <Link to={'/login'}>
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-10 py-5 text-center me-2 mb-2 flex items-center">
                            Add Your Task
                            <GoArrowUpRight className="ml-5 bg-white text-lg text-black
                            rounded-2xl" />
                        </button>
                    </Link>
                </div>
                <div className="home-right">
                    <img src={HeroImage} className="w-full" alt="hero-task-image" />
                </div>
            </div>
        </section>
    )
};

export default Home;