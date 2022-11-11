import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const myReview = useLoaderData();
    return (
        <div>
            {
                myReview.map(review => <MyReviewCard key={review._id} review={review} user={user}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;