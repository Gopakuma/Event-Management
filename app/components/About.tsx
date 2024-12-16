import Image from 'next/image'
import React from 'react'
import AboutImage from './assets/About.jpg'

function About() {
    return (
        <>
            <div className='flex flex-col items-center shadow-2xl shadow-black'>
                <div className='shadow-black opacity-60 shadow-2xl bg-black rounded-full xxs-mobile:h-30 md:h-56 xl:h-64 xs-mobile:h-32'>
                    <div className='scale-50 tracking-widest text-center md:m-14 md:scale-95 xl:m-24 xl:text-lg'>
                        Our mission is to preserve most special moments of life. Whether it is a
                        wedding, a birthday, or even a regular day, our pictures capture the
                        energy of life, so you can look back and relive everything again.
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <Image
                        src={AboutImage}
                        alt='about image'
                        className='opacity-75 shadow-md shadow-black'
                    />
                    <div className='absolute
                                    text-lg
                                    tracking-widest
                                    shadow-xl
                                    xl:scale-150
                    '>
                        OUR WORKS
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
