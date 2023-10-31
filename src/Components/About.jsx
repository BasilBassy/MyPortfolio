import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm: text-right text-4xl font-bold'>
                        <p>Hi, it's Basil. welcome to my world keep surfing!!</p>
                    </div>
                    <div>
                        <p>Hey there! I'm Basil Ogbonna, a passionate frontend web developer and public health scientist. 
                            With my expertise in both fields, I strive to create impactful web experiences 
                            that promote health and well-being. I'm constantly seeking new challenges and opportunities to make
                             a positive impact through technology. When I'm not coding, you can find me making research, trying out new knowledg. I'm excited to 
                            share my journey and projects with you, so let's 
                            connect and create something amazing together!</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About