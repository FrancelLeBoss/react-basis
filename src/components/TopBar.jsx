import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

const TopBar = ({ light }) => {
    return (
        <div className={light ? 'font-sans border-b border-blue-900 text-blue-900 flex justify-between px-16 py-3' :
            'bg-blue-900 font-sans text-white flex justify-between px-16 py-3'}>
            <div className='flex gap-8'>
                <a href="mailto:info@marineteam.kz"><FontAwesomeIcon icon={faEnvelope} /> info@marineteam.kz</a>
                <span><FontAwesomeIcon icon={faClock} /> Понедельник - пятница : с 8 утра до 9 вечера</span>
            </div>
            <div className='flex gap-2'>
                <FontAwesomeIcon icon={faFacebookF} className=" rounded border px-2 py-1 cursor-pointer" />
                <FontAwesomeIcon icon={faTwitter} className=" rounded border px-2 py-1  cursor-pointer" />
            </div>
        </div>
    )
}

export default TopBar