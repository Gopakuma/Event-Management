import Image from 'next/image'
import React from 'react'
import img_hero from './assets/Hero.jpg'
import HeroContent from './HeroContent'

function HeroImage() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={img_hero}
                alt='hero image'
                className='opacity-75 object-contain shadow-2xl' />
            <HeroContent />
        </div>
    )
}

export default HeroImage
