import React from 'react';
import Project1Carousel from './items/Project1Carousel';
import Project2Carousel from './items/Project2Carousel';
import video from '../assets/project3/Software.mp4';

const Work = () => {
    return (
        <div className='bg-black max-w-[1200px] mx-auto p-5' id='work'>
            <div className='pb-8'>
                <p className='text-3xl mb-4 font-bold primary-color'>Work</p>
                <p className='text-gray-400'>Check out some of my recent works</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <a href='https://github.com/Bihari-Fernando/Certificate-Managment-System.git' target="_blank" rel='noopener noreferrer' className='flex flex-col items-center'>
                    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                        <Project1Carousel />
                    </div>
                    <p className='mt-2 text-gray-400'>Certificate Management System</p>

                </a>



                <a href='https://github.com/Bihari-Fernando/Taskly_App.git' target="_blank" rel='noopener noreferrer' className='flex flex-col items-center'>
                    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                        <Project2Carousel />
                    </div>
                    <p className='mt-2 text-gray-400'>Taskly App</p>
                </a>

                <a href='https://www.linkedin.com/posts/bihari-fernando-567973262_excited-to-share-my-first-java-software-activity-7222302440027570176-V0vE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECSGl8BwnfaidXJorn5EMIYOA5-2fo2qZQ' target="_blank" rel='noopener noreferrer' className='flex flex-col items-center'>
                    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                        <video muted autoPlay loop>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag
                        </video>
                    </div>
                    <p className='mt-2 text-gray-400'>Student Management System</p>
                </a>

            </div>

        </div>
    );
};

export default Work;
