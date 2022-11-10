import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import ReviewSection from '../../Review/ReviewSection';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { details, image, title, price } = service;
    const reviewDetails = service.review;

    return (
        <div>
            <div className='bg-white rounded-xl shadow-2xl md:mx-20 sm:mx-2 md:px-8 py-0.5 my-10'>
                <div className='mx-auto my-10 md:flex space-x-4 mb-24'>
                    <img src={image} alt="" style={{ height: "400px", width: "600px" }} className="bg-emerald-600 rounded-xl" />
                    <div className='px-14'>
                        <div className='flex justify-between items-center w-full'>
                            <p className='text-2xl font-bold'>{title}</p>
                            <p className='text-2xl font-semibold text-emerald-500'>${price}.99</p>
                        </div>
                        <p className='text-lg mt-5 text-justify'>{details}</p>
                        <div className='flex justify-center'>
                            <button onClick={() => alert('Succesfully added to cart')} className='inline-flex border-2 border-emerald-500 rounded-md py-1 px-2 text-emerald-500 hover:bg-emerald-500 hover:text-white my-4'>Take Service</button>
                        </div>
                    </div>
                </div>
                <p className='text-3xl font-bold text-[#1F2837] text-center mb-2'>Customer Feedback</p>
                

                <div className=''>
                    {
                        reviewDetails.map(details => <ReviewSection
                            key={details.name}
                            details={details}
                        >
                        </ReviewSection>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;