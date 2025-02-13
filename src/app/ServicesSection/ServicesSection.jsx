import React from 'react';
import velo from '/public/image-1.png'
import Image from "next/image";

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-content">
                <h2 className="services-title">Что мы предлагаем</h2>
                <p className="services-description">
                    В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.
                </p>
            </div>
            <div className="services-images">
                <Image src={velo} alt="velo" className="service-image"/>
            </div>
        </section>
    );
};

export default ServicesSection;