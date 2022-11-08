import React from 'react';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* background image */}
            <div class="relative overflow-hidden bg-no-repeat bg-cover" 
            style={{backgroundPosition: "50%", backgroundImage: "url('https://www.bangladeshyp.com/img/cats/lawyers.jpg')", height: "450px"}}>
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
                    <div class="flex justify-center items-center h-full">
                        <div class="text-center text-white px-6 md:px-12">
                            <h1 class="text-5xl font-bold mt-0 mb-6">Heading</h1>
                            <h3 class="text-3xl font-bold mb-8">Subeading</h3>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* service section */}
            <Services></Services>
        </div>
    );
};

export default Home;