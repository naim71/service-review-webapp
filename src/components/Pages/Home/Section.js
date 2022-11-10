import React from 'react';

const Section = () => {
    return (
        <div>
            <section className=" bg-gray-100 text-gray-800 w-screen">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Why Should you take my services?</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-green-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Full knowledge of taxation laws</h3>
                        <div className="space-y-1 leading-tight px-3 text-center">
                            <p>A taxation agent knows all the latest updates of income tax. They are experts in applying correct income tax percentage.</p>
                            
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-green-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Takes less time</h3>
                        <div className="space-y-1 leading-tight px-3 text-center">
                            <p>Doing income tax filing by yourself will waste precious time. </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 mb-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-green-600">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">No chances of mistakes</h3>
                        <div className="space-y-1 leading-tight px-3 text-center">
                            <p>The businessmen have to fill various forms in a year. So, the chances of mistakes may arise. </p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Section;