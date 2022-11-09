import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='grid md:grid-cols-3 gap-10 md:mx-36 mx-10 my-20'>
            {
                services.map(service => <Service 
                key={service.id}
                service={service}
                >
                </Service>)
            }
        </div>
    );
};

export default Services;