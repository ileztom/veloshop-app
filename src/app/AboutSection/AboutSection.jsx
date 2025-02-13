import React from 'react';
import dino from '/public/din-1.png'
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Веломастерская "Велозар"</h1>
                <p className="about-description">
                    Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.
                </p>
            </div>
            <Image img src={dino} alt="dino" className="about-image" />
        </section>
    );
};

export default AboutSection;