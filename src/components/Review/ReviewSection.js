import React, { useEffect, useState } from 'react';

const ReviewSection = ({revcard}) => {
    const {img, text,name, email} = revcard;
    return (
        <div className='bg-emerald-100 rounded-lg shadow-lg p-5 text-[#1F2837] mb-20 mt-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'>
            <div>
                <div className='flex justify-between items-center'>
                    <img src={img} alt="" className='w-14 h-14 rounded-full mb-2' />
                    <p className='text-lg font-semibold text-yellow-500'>⭐ 5</p>
                </div>
                <p className='mb-2'>"<span>{text}</span>"</p>
                <div className='flex justify-between items-center'>
                <p className='font-semibold'>- {name}</p>
                <p className='font-semibold'>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;