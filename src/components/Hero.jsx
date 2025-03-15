import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import me from '../assets/me.jpg'

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img src={me} alt='my image' className='rounded-full w-[350px]' />
            </div>

            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl front-extrabold'>
                    <span className='primary-color'>
                        I'm a
                    </span><br />
                    <TypeAnimation
                        sequence={[
                            "Frontend dev",
                            1000,
                            "Webdesigner",
                            1000,
                            "backend dev",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text'>
                    I am a passionate Computer Science undergraduate with a strong foundation in software development and problem-solving. With hands-on experience in real-world projects, I continuously seek opportunities to learn, innovate, and contribute to impactful solutions. I thrive in collaborative environments and am eager to apply my skills to meaningful projects. Beyond coding, I enjoy exploring emerging technologies and finding creative ways to solve challenges. My goal is to make a positive impact through technology and continuous learning
                </p>
                <div className='my-8'>
                    <a href='/cv.pdf' download="My_CV.pdf" className='px-6 py-3 w-full rounded-xl bg-gradient-to-br from-blue-700 to-teal-500 text-white no-underline'>Download CV</a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-blue-700 to-teal-500 text-white hover:border-none'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Hero