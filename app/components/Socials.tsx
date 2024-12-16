import React from 'react'

type TSocials = {
    link: string
    path: string
}

function Socials({ link, path }: TSocials) {
    return (
        <a href={link}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                    d={path}></path>
            </svg>
        </a>
    )
}

export default Socials
