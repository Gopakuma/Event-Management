import Image, { StaticImageData } from 'next/image'
import React from 'react'

type TPotrait = {
    _src: StaticImageData
    _alt: string
    _caption: string
}

function Potrait({ _src, _alt, _caption }: TPotrait) {
    return (
        <div className='flex flex-col 
                        gap-2
                        mt-5
                        md:mt-2
                        translate-y-2
                        transition-all duration-500 ease-in-out
        '>
            <Image
                src={_src}
                alt={_alt}
            />
            <div className='text-end 
                            xxs-mobile:ml-10
                            xxs-mobile:text-xs
                            md:text-lg
            '>
                {_caption}
            </div>
        </div>
    )
}

export default Potrait
