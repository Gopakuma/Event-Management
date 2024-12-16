import React from 'react'
import potrait3 from './assets/potrait3.jpg'
import potrait4 from './assets/potrait4.jpg'
import potrait5 from './assets/potrait5.jpg'
import potrait8 from './assets/potrait8.jpg'
import potrait9 from './assets/potrait9.jpg'
import Potrait from './Potrait'

const images = [
    potrait3,
    potrait4,
    potrait5,
    potrait8,
    potrait9
]

function Works() {
    return (
        <div className='flex 
                        xxs-mobile:flex-col 
                        flex-shrink-0 
                        xxs-mobile:p-14 
                        xxs-mobile:gap-24
                        
                        md:grid grid-cols-2
                        md:p-28
                        md:gap-12 

                        animate-slide-in duration-500 ease-in-out forwards
                        '>

            {images.map((img, index) => {
                return <Potrait key={index} _src={img} _alt={`img${index + 1}`} _caption={`Potrait ${index + 1}`} />
            })}
            <div className='mb-10
                            top-0
                            h-52
                            text-xs 
                            sm-mobile:ml-10
                            mobile:ml-24
                            sm:ml-36
                            sm:text-sm
                            md:mt-10
                            md:ml-10
                            lg:mt-20
                            lg:ml-16
                            xl:text-xl
                            xl:mt-48
                            xl:ml-40
                            '>
                <div className='flex flex-col 
                                mt-7 gap-10 
                                md:ml-5
                                '>
                    <div className='tracking-widest'>
                        See yourself through our lens...
                    </div>
                    <div className='flex flex-col
                                    tracking-widest
                                    text-left
                                    gap-2
                                    
                                    '>
                        <div>
                            hello@reallygreatsite.com
                        </div>
                        <div>
                            @reallygreatsite
                        </div>
                        <div>
                            123 Anywhere St,
                        </div>
                        <div>
                            Any City, ST 12345
                            123-456-7890
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Works
