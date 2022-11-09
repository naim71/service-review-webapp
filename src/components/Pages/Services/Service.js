import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';



const Service = ({service}) => {
    const {image, description, title, price, _id} = service;
    return (
        <div>
            
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-slate-200 h-full" 
             style={{height: "450px"}}>
                {/*  <!-- Image --> */}
                <PhotoProvider>
                <figure>
                    <PhotoView src={image}>
                    <img
                        src={image}
                        alt=""
                        className="aspect-video w-full" />
                    </PhotoView>
                </figure>
                </PhotoProvider>
                
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                            {title}
                        </h3>
                        <p className=" text-emerald-500 text-lg"> $<span>{price}</span>.99</p>
                    </header>
                    <p className=''>
                        {description}
                    </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                    <Link to={`/services/${_id}`}><button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>View Details</span>
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;