

import HeroSection from "../HeroSection/HeroSection";
import useAuth from "../hooks/useAuth";
import AddTask from "../Tasks/AddTask";
import TaskSection from "../Tasks/TaskSection";
import UpdateTask from "../Tasks/UpdateTask";

const Home = () => {
    const { loggedIn, openUpdateTask } = useAuth();
    return (
        <section className='container mx-auto'>
            {/* Conditional Rendering By Login Wise  */}
            {
                loggedIn ? <>
                    {
                        openUpdateTask ? <div className='w-full m-2 md:w-1/3 mx-auto absolute top-1/2 left-1/2 -translate-1/2 transition-all bg-white rounded-4xl p-10'>
                            <UpdateTask></UpdateTask>
                        </div> : <><AddTask></AddTask>
                            <TaskSection></TaskSection></>
                    }
                </>
                    : <HeroSection></HeroSection>
            }
        </section>
    )
};

export default Home;