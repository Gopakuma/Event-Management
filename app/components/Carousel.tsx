import React from 'react'
import potrait7 from './assets/potrait7.jpg'
import potrait1 from './assets/Potrait1.jpg'
import potrait6 from './assets/potrait6.jpg'
import CarouselItem from './CarouselItem'

const carouselItems = [
    potrait7,
    potrait1,
    potrait6
]

function Carousel() {
    return (
        <>
            <div className="carousel 
            carousel-center 
            shadow-2xl 
            shadow-black
            w-screen
            ">
                {carouselItems.map((item, index) => {
                    return <CarouselItem key={index} image={item} />
                })}
            </div>
        </>

    )
}

export default Carousel
