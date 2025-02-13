import React from 'react';
import Header from "../src/app/Header/Header";
import AboutSection from "../src/app/AboutSection/AboutSection";
import ServicesSection from "../src/app/ServicesSection/ServicesSection";
import TestimonialSection from "../src/app/TestimonialSection/TestimonialSection";
import ServiceCards from "../src/app/ServiceCard/ServiceCard";
import RentalSection from "../src/app/RentalSection/RentalSection";

import "../src/app/App.css"
import "../src/app/Header/module.css"
import "../src/app/AboutSection/module.css"
import "../src/app/ServicesSection/module.css"
import "../src/app/TestimonialSection/module.css"
import "../src/app/ServiceCard/module.css"
import "../src/app/RentalSection/module.css"

const Home = () => {
    return (
        <div className="velo-workshop">
            <Header />
            <main>
                <AboutSection />
                <ServicesSection />
                <TestimonialSection />
                <ServiceCards />
                <RentalSection />
            </main>
        </div>
    );
};

export default Home;