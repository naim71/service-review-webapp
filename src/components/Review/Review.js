import React from 'react';
import ReviewSection from './ReviewSection';

const Review = ({rev}) => {
    const {_id, serviceId, review} =rev;
    return (
        <div className=''>
            {
                review.map(revcard => <ReviewSection
                key={revcard.email}
                revcard={revcard}
                ></ReviewSection>)
            }
            
        </div>
    );
};

export default Review;