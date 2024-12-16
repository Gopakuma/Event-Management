import React from 'react'
import Logo from './Logo'
import HeroImage from './HeroImage'

function Hero() {
    return (
        <div className='flex flex-col shadow-xl mb-2'>
            <Logo />
            <HeroImage />
        </div>
    )
}

export default Hero
