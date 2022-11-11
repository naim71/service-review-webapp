import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../../hook/useDocumentTitle';
import ServiceLimit from '../Services/ServiceLimit';
import Section from './Section';

const Home = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/servicesById')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            {/* background image */}
            <div className="relative overflow-hidden bg-no-repeat bg-cover" 
            style={{backgroundPosition: "50%", backgroundImage: "url('https://i.ibb.co/X25z4Xt/love-your-lawyer-day.jpg')", height: "450px"}}>
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center text-white px-6 md:px-12">
                            <h1 className="text-5xl font-bold mt-0 mb-6">BRAD'S LAW</h1>
                            <h3 className="text-3xl font-bold mb-8 text-emerald-500">TAX LAW ATTORNEY</h3>
                            <h3 className="text-xl mb-8">For your convenience I'm also available for virtual appointments & consultations</h3>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* service section */}
            <div className='grid md:grid-cols-3 gap-10 md:mx-36 mx-10 mt-20 mb-10'>
            {
                services.map(serviceLimit => <ServiceLimit
                    key={serviceLimit._id}
                    serviceLimit={serviceLimit}
                >
                </ServiceLimit>)
            }
            </div>
            
            <Link to="/services" className='flex justify-center'><button className='bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-md shadow-xl inline-flex justify-center mb-10'>View All</button></Link>
            <Section></Section>

        </div>
    );
};

export default Home;