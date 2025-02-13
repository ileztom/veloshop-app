import React from 'react';
import velos from '/public/linkedin-sales-navigator-402831.png'
import Image from "next/image";

const RentalSection = () => {
    return (
        <section className="rental-section">
            <Image src={velos} alt="velos" className="rental-image"/>
            <div className="rental-content">
                <h2 className="rental-title">Прокат велосипедов</h2>
                <p className="rental-description">
                    У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!
                </p>
            </div>
        </section>
    );
};

export default RentalSection;