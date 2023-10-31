import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex-col justify-center h-full'>
                <p className='text-pink-600 pt-20'>Hi,my name is</p>
                <h1 className='text 4x-l sm:text-7xl font-bold text-[#ccd6f6]'>
                    Ogbonna Basil
                    </h1>
                <h2 className='text text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Frontend web Developer and a Public Health Scientist
                    </h2>
                <p className='text-[#8892b0] py-4 max-w-[700]'>
                    As a frontend web developer and public health scientist, I combine my passion
                    for technology with my dedication to improving public health. With a strong background in both fields, I strive to create user-friendly and
                    impactful web experiences that promote health and well-being.
                    </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Home
