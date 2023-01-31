import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

interface props {
    light: boolean
}

const TopBar = ({ light }: props) => {
    return (
        <div className={light ? 'font-sans border-b border-blue-900 text-blue-900 flex text-sm justify-center md:justify-between px-8 lg:px-16 md:px-12 py-2' :
            'bg-blue-900 font-sans text-white flex justify-between px-16 py-2 text-sm'}>
            <div className='md:flex hidden gap-8 '>
                <a href="mailto:info@marineteam.kz" className='flex items-center gap-1'><FontAwesomeIcon icon={faEnvelope} /> info@marineteam.kz</a>
                <span className='hidden lg:flex items-center gap-1'><FontAwesomeIcon icon={faClock} /> Понедельник - пятница : с 8 утра до 9 вечера</span>
                <a href="tel:+77292333455" className='hidden md:flex xl:hidden items-center gap-1'><FontAwesomeIcon icon={faPhone} /> +7 (7292) 333 455</a>
            </div>
            <div className='flex gap-2'>
                <FontAwesomeIcon icon={faFacebookF} className=" rounded border px-2 py-1 cursor-pointer" />
                <FontAwesomeIcon icon={faTwitter} className=" rounded border px-2 py-1  cursor-pointer" />
            </div>
        </div>
    )
}

export default TopBar