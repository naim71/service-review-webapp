import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import Mymodal from '../../../Modal/Mymodal';
import Review from '../../Review/Review';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData();
    const { _id, details, image, title, price } = service;
    useEffect(()=>{
        fetch(`https://b6a11-service-review-server-side-naim71.vercel.app/reviews1/${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    })
    
    const handleOnClose = () => setShowModal(false);

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
                <div>
                    <p className='text-3xl font-bold text-[#1F2837] text-center mb-2'>Customer Feedback
                    </p>
                    <p className='text-right'>
                    <button onClick={() => setShowModal(true)} className='bg-emerald-500 hover:bg-emerald-700 text-white p-2 rounded-lg mx-auto'>+ Add Review</button>
                    </p>
                    <Mymodal onClose={handleOnClose} visible={showModal} service={service}/>
                </div>

                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        reviews.map(rev =><Review
                        key={rev._id}
                        rev={rev}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;