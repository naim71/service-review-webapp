import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='grid md:grid-cols-3 gap-10 md:mx-36 mx-10'>
            <Service></Service>
            <Service></Service>
            <Service></Service>
            <Service></Service>
            <Service></Service>
        </div>
    );
};

export default Services;