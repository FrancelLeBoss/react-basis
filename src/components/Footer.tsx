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
            <div className='mx-16 p-16 flex gap-6 bg-blue-500'>
                <div className='flex-1 text-white flex flex-col justify-between gap-6'>
                    <div className='text-2xl font-semibold'>Trusted Buying Experience</div>
                    <div className='text-xl'>Incididunt labore magna aliqua veniams</div>
                    <button className='rounded bg-red-600 px-8 py-4 text-xl max-w-xs'>Get Started</button>
                </div>
                <ul className='flex-1 flex flex-col justify-between text-xl text-white list-none'>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Ipsum dolor sit amet adipiscing elit.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Phasellus in risus erat sed vel vestibulum turpis.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Orci varius natoque penatibus et.</span></li>
                    <li className='flex gap-3 items-center'><FontAwesomeIcon icon={faFaceAngry} /><span>Integer condimentum nisi ac volutpat posuere.</span></li>
                </ul>
            </div>
            <div className='px-16 pt-6 bg-blue-900 flex flex-col'>
                <div className='flex justify-between items-center  py-12'>
                    <a href='tel:+77292333455' className={`text-white text-2xl py-4 font-medium`}><FontAwesomeIcon icon={faPhone} />   +7 (7292) 333 455 </a>
                    <div><Link
                        to='/'
                    >
                        <img src="./logo.png" alt="" className='cursor-pointer w-24 h-24' />
                    </Link></div>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faFacebookF} className="text-white rounded border px-2 py-1 cursor-pointer" />
                        <FontAwesomeIcon icon={faTwitter} className=" rounded border px-2 py-1 text-white  cursor-pointer" />
                        <FontAwesomeIcon icon={faFacebookF} className="text-white rounded border px-2 py-1 cursor-pointer" />
                        <FontAwesomeIcon icon={faTwitter} className=" rounded border px-2 py-1 text-white  cursor-pointer" />
                        <FontAwesomeIcon icon={faFacebookF} className="text-white rounded border px-2 py-1 cursor-pointer" />
                        <FontAwesomeIcon icon={faTwitter} className=" rounded border px-2 py-1 text-white  cursor-pointer" />
                    </div>
                </div>
                <div className="border-y border-inherit" ><Menu pied={true} color={"text-white"} /></div>
                <div className='py-12 text-white items-center px-[24rem]'>Авторское право 2020 - 2022 | Все права защищены | Работает от Francel</div>
            </div>
        </div>
    )
}

export default Footer