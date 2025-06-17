

import HeroSection from "../HeroSection/HeroSection";
import useAuth from "../hooks/useAuth";
import AddTask from "../Tasks/AddTask";
import TaskSection from "../Tasks/TaskSection";

const Home = () => {
    const { loggedIn } = useAuth();
    return (
        <section className='container mx-auto'>
            {/* Conditional Rendering By Login Wise  */}
            {
                loggedIn ? <>
                    <AddTask></AddTask>
                    <TaskSection></TaskSection>
                </>
                    : <HeroSection></HeroSection>
            }
        </section>
    )
};

export default Home;