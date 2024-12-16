import Image, { StaticImageData } from 'next/image'
import React from 'react'

type TCarouselProp = {
    image: StaticImageData
}

function CarouselItem({ image }: TCarouselProp) {
    return (
        <div className="carousel-item">
            <Image src={image} alt='pizza'
                className='w-screen h-fit'
            />
        </div>
    )
}

export default CarouselItem