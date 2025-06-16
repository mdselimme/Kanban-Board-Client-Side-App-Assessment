

import HeroSection from "../HeroSection/HeroSection";
import useAuth from "../hooks/useAuth";
import AddTask from "../Tasks/AddTask";

const Home = () => {
    const { loggedIn } = useAuth();
    return (
        <section className='container mx-auto'>
            {
                loggedIn ? <AddTask></AddTask> : <HeroSection></HeroSection>
            }
        </section>
    )
};

export default Home;