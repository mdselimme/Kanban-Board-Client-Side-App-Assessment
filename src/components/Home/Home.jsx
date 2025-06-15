

import HeroSection from "../HeroSection/HeroSection";
import useAuth from "../hooks/useAuth";
import Tasks from "../Tasks/Tasks";

const Home = () => {
    const { setLoggedIn } = useAuth();
    return (
        <section className='container mx-auto'>
            {
                setLoggedIn ? <Tasks></Tasks> : <HeroSection></HeroSection>
            }
        </section>
    )
};

export default Home;