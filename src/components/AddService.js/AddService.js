import React, { useState } from 'react';

const AddService = () => {
    const [serviceData, setServiceData ] = useState({});
    const handleAddService = event =>{
        event.preventDefault();
        console.log(serviceData);
        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        })

        
    } 

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...serviceData}
        newService[field] = value;
        setServiceData(newService);
    }

    return (
        <div>
            <form onSubmit={handleAddService} className='my-20'>
                <div className="mb-6 mx-40">
                    <div className='mb-5'>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input onBlur={handleInputBlur} type="text" id="first_name" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-74 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service Title" required="" />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Description</label>
                        <input onBlur={handleInputBlur} name='description' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 md:h-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" maxLength = "90" placeholder="maximum 100 characters" required="" />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Details</label>
                        <input onBlur={handleInputBlur} name='details' type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:h-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Details of the service" required="" />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                        <input onBlur={handleInputBlur} name='price' type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-74 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="120" required="" />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                        <input onBlur={handleInputBlur} name='image' type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://i.ibb.co/71mrX6N/Tax-Settlement-Complete-Controller-800x600.jpg" required="" />
                    </div>
                </div>
                <div className='flex justify-center mb-3'>
                    <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Service</button>
                </div>
            </form>
        </div>

    );
};

export default AddService;