import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import ReviewTable from './ReviewTable';

const MyReviewCard = ({review}) => {
    const {user} = useContext(AuthContext);
    const id = review._id;
    const card = review.review;
    const [displayCard, setDisplayCrad] = useState(card);
    console.log(displayCard);

    const handleDelete = id =>{
        const agree = window.confirm(`Are you sure you want to delete the Review of ${id}?`)
        if(agree){
            //console.log('Delete User email: ', id);
            fetch(`http://localhost:5000/reviews1/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('User Deleted Successfully');
                }
            });
        }
    }

    return (
        <div >
            {
                displayCard.map(table => <ReviewTable key={table.email} table={table} user={user} id={id} handleDelete={handleDelete}></ReviewTable>)
            }
        </div>
    );
};

export default MyReviewCard;