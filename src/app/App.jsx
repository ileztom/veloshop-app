import React from 'react';
import Header from '/Header/Header';
import AboutSection from '/AboutSection/AboutSection';
import ServicesSection from '/ServicesSection/ServicesSection';
import TestimonialSection from '/TestimonialSection/TestimonialSection';
import ServiceCards from '/ServiceCard/ServiceCard';
import RentalSection from '/RentalSection/RentalSection';

const App = () => {
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

export default App;