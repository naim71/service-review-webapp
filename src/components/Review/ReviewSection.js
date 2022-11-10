import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewSection = ({review}) => {
    const {img, text,name, email} = review;
    return (
        <div className='bg-white'>
            <div>
                <div className='flex justify-between items-center'>
                    <img src={img} alt="" className='w-14 h-14 rounded-full mb-2' />
                    <p className='text-lg font-semibold text-yellow-500'>⭐ 5</p>
                </div>
                <p className='mb-2'>"<span>{text}</span>"</p>
                <div className='flex justify-between items-center'>
                <p className='font-bold'>- {name}</p>
                <p className='font-bold'>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;