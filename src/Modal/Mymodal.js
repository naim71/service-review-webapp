import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Mymodal = ({ visible, onClose, service }) => {
    const {_id} = service;
    const {user} = useContext(AuthContext);
    if (!visible) return null;

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered' ;
        const img = user?.photoURL || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';
        const text = form.review.value;
        const email = user?.email; 

        const review = {
            serviceId: _id,
            review: [
                {
                    img: img,
                    text: text,
                    name: name,
                    email: email
                }
            ]
        }    

        fetch('https://b6a11-service-review-server-side-naim71.vercel.app/reviews1',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset();
            if(data.acknowledged){
                alert('Review Added Succesfully');
            }
            
        })
        .catch(er => console.log(er))
    }

    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-8 rounded w-96">
                { user?.uid?
                <>
                    <form onSubmit={handleReview} >
                        <h1 className="font-semibold text-center text-xl text-gray-700 mb-10">
                            Please Share Your Experience
                        </h1>
                        <label className='mt-5'>
                            Review
                        </label>
                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-2  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Share Your feedback" name='review' required/>
                        <p className='text-center'><button type='submit' className=" mx-auto  px-5 py-2 bg-emerald-500 text-white rounded mt-4">Submit</button></p>
                    </form>
                    <p className='text-center mt-5'><button onClick={onClose} className=" mx-auto  px-5 py-2 bg-red-700 text-white rounded">
                    Close
                </button></p>
                </>
            :
                <div className='p-8'>
                    <p className='text-lg mb-8 font-bold text-center'> Please login to add a review </p>
                    <p className='text-center'><Link to='/login' className=" mx-auto  px-5 py-2 bg-emerald-500 text-white rounded my-4">
                                Login
                            </Link></p>
                    <p className='text-center'><button onClick={onClose} className=" mx-auto  px-5 py-2 bg-red-700 text-white rounded mt-5">
                                Close
                            </button></p>
                </div>
        }
            </div>
        </div>
    );
};

export default Mymodal;