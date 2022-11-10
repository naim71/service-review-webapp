import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const Mymodal = ({ visible, onClose }) => {
    const {user} = useContext(AuthContext);
    if (!visible) return null;

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered' ;
        const img = user?.photoURL;
        const text = form.review.value;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-8 rounded w-96">
                { user?.uid?
                    <form onSubmit={handleReview} >
                        <h1 className="font-semibold text-center text-xl text-gray-700">
                            Please Share Your Experience
                        </h1>
                        <label>
                            Review
                        </label>
                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Review" name='review'/>
                        
                    </form>
            :
                <div className='p-8'>
                    <p className='text-lg mb-8 font-bold text-center'> Please login to add a review </p>
                    <p className='text-center'><button onClick={onClose} className=" mx-auto  px-5 py-2 bg-red-700 text-white rounded">
                                Close
                            </button></p>
                </div>
        }
            </div>
        </div>
    );
};

export default Mymodal;