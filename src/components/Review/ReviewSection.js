import React from 'react';

const ReviewSection = ({ details }) => {
    console.log(details.review1);
    const rev1 = details.review1;
    const rev2 = details.review2;
    const rev3 = details.review3;

    return (
        <div className='grid md:grid-cols-3 gap-10 my-8 mx-5'>
            <div>
                <div className='flex justify-between items-center'>
                    <img src={rev1.img} alt="" className='w-14 h-14 rounded-full mb-2' />
                    <p className='text-lg font-semibold text-yellow-500'>⭐ 5</p>
                </div>
                <p className='mb-2'>"<span>{rev1.text}</span>"</p>
                <p className='font-bold'>- {rev1.name}</p>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <img src={rev2.img} alt="" className='w-14 h-14 rounded-full mb-2' />
                    <p className='text-lg font-semibold text-yellow-500'>⭐ 5</p>
                </div>
                <p className='mb-2'>"<span>{rev2.text}</span>"</p>
                <p className='font-bold'>- {rev2.name}</p>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <img src={rev3.img} alt="" className='w-14 h-14 rounded-full mb-2' />
                    <p className='text-lg font-semibold text-yellow-500'>⭐ 5</p>
                </div>
                <p className='mb-2'>"<span>{rev3.text}</span>"</p>
                <p className='font-bold'>- {rev3.name}</p>
            </div>
        </div>
    );
};

export default ReviewSection;