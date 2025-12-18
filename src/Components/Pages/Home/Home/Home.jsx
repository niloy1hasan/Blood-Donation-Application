import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../../../Shared/Footer/Footer';
import Featured from '../Featured/Featured';
import Contact from '../Contact/Contact';
import BloodDemand from '../BloodDemand/BloodDemand';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <BloodDemand></BloodDemand>
            <Featured></Featured>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;