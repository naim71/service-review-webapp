import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';

const ReviewTable = ({ table, user, id, handleDelete }) => {
    //const { user } = useContext(AuthContext);
    //const [displayReview, setDisplayReview] = useState(table);
    const mail = table.email;
    const { img, text, name } = table;
    const { email } = user;

    
    return (

        <div>
            {user ? email === mail ?
                <>
                <div className='bg-emerald-100 rounded-xl shadow-lg p-7 mx-auto my-10 md:w-96'>
                    <img className='h-8 w-8 mb-2' src={img} alt='' />
                    <div className='mb-2'>Email: {mail}</div>
                    <div className='mb-5'>Review: "{text}"</div>
                    <div className='mb-2 flex justify-center space-x-5'>
                    <button className='px-2 py-1 bg-emerald-500 text-white rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Edit</button>
                    <button onClick={()=> handleDelete(id)} className='px-2 py-1 bg-[#ED1C24] text-white rounded shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Delete</button>
                    </div>


                </div>
                </>
                :
                <></>
                :
                <><p>No Reviews Found</p></>

            }

        </div>
    );
};

export default ReviewTable;