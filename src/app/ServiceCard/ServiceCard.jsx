import React from 'react';

const ServiceCard = ({ title, backgroundColor }) => (
    <div className="service-card" style={{ backgroundColor }}>
        <h3 className="service-card-title">{title}</h3>
    </div>
);

const ServiceCards = () => {
    const services = [
        { title: 'Годовое ТО', backgroundColor: 'rgba(34, 53, 111, 1)' },
        { title: 'Выравнивание колес', backgroundColor: 'rgba(0, 82, 193, 1)' },
        { title: 'Настройка переключателей', backgroundColor: 'rgba(118, 181, 139, 1)' }
    ];

    return (
        <section className="service-cards">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </section>
    );
};

export default ServiceCards;