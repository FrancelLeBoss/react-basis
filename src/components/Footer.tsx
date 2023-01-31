import React from 'react'
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'
//import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className=''>
            <div className='mx-8 lg:mx-16 md:mx-12 px-6 lg:px-12 md:px-8 py-4 md:py-6 lg:py-8 flex flex-wrap gap-6 bg-blue-500'>
                <div className='flex-1 text-white flex flex-col around:justify-between justify-around gap-3'>
                    <div className='text-2xl font-semibold'>Trusted Buying Experience</div>
                    <div className='text-xl'>Incididunt labore magna aliqua veniams</div>
                    <button className='rounded bg-red-600 py-2 text-base'>Get Started</button>
                </div>
                <ul className='flex-1 flex flex-col justify-around text-sm md:text-base text-white list-none'>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Ipsum dolor sit amet adipiscing elit.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Phasellus in risus erat sed vel vestibulum turpis.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Orci varius natoque penatibus et.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Integer condimentum nisi ac volutpat posuere.</span></li>
                </ul>
            </div>
            <div className='px-8 lg:px-16 md:px-12 pt-6 bg-blue-900 flex flex-col'>
                <div className='flex flex-wrap gap-3 justify-between items-center lg:py-12 py-8'>
                    <a href='tel:+77292333455' className={`text-white text-sm md:text-xl p-2 rounded  border border-blue-400  font-medium`}><FontAwesomeIcon icon={faPhone} />   +7 (7292) 333 455 </a>
                    <div><Link
                        to='/'
                    >
                        <img src="./logo.png" alt="" className='cursor-pointer w-16 h-16 lg:w-20 lg:h-20' />
                    </Link></div>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faFacebookF} className="text-white rounded border px-2 py-1 cursor-pointer" />
                        <FontAwesomeIcon icon={faTwitter} className=" rounded border px-2 py-1 text-white  cursor-pointer" />
                        <FontAwesomeIcon icon={faFacebookF} className="text-white rounded border px-2 py-1 cursor-pointer" />
                        <FontAwesomeIcon icon={faTwitter} className=" rounded border px-2 py-1 text-white  cursor-pointer" />
                        <FontAwesomeIcon icon={faFacebookF} className="text-white rounded border px-2 py-1 cursor-pointer" />
                    </div>
                </div>
                <div className="border-y border-inherit" ><Menu pied={true} color={"text-white"} /></div>
                <div className='py-8 lg:py-12 text-white text-sm lg:text-base flex justify-center'>Авторское право 2020 - 2022 | Все права защищены | Работает от Francel</div>
            </div>
        </div>
    )
}

export default Footer