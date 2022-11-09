import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { details, image, title, price } = service;
    return (
        <div>
            <div className='bg-white rounded-xl shadow-2xl md:mx-20 sm:mx-2 md:px-8 py-0.5 my-10'>
                <div className='mx-auto my-10 md:flex space-x-4'>
                    <img src={image} alt="" style={{ height: "400px", width: "600px" }} className="bg-emerald-600 rounded-xl" />
                    <div className='px-14'>
                        <div className='flex justify-between items-center w-full'>
                            <p className='text-2xl font-bold'>{title}</p>
                            <p className='text-2xl font-semibold text-emerald-500'>${price}.99</p>
                        </div>
                        <p className='text-lg mt-5 text-justify'>{details}</p>
                        <button onClick={() => alert('Succesfully added to cart')} className='border-2 border-emerald-500 rounded-md py-1 px-2 text-emerald-500 hover:bg-emerald-500 hover:text-white my-4'>Take Service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;