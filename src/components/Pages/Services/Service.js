import React from 'react';

const Service = () => {
    return (
        <div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-slate-200">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src="https://i.ibb.co/dpRscpN/code-snapshot.png"
                        alt="card image"
                        className="aspect-video w-full"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                            Greek breakfast
                        </h3>
                        <p className=" text-slate-400"> $8.99</p>
                    </header>
                    <p>
                        Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries +
                        Granola + Honey.
                    </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Order now!</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;