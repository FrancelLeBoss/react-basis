import React from 'react'
import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Menu = ({ pied, color }) => {
    const [active, setActive] = useState("/")
    const val = ["/services", "/certificats", "/products", "/about", "/contact"]

    useEffect(() => {
        setActive(window.location.pathname)
    }, [])

    return (
        <div className={` ${pied ? "px-16 py-12 flex justify-center items-center font-serif" : "font-serif px-16 py-4 flex justify-between items-center"}`}>
            <div className={`${pied ? "hidden" : ""}`}>
                <Link
                    to='/'
                >
                    <img src={Logo} alt="" className='cursor-pointer w-20 h-20' />
                </Link>
            </div>
            <ul className={`flex list-none font-semibold ${pied ? "gap-24" : "gap-8"}`}>
                <li className={!val.includes(window.location.pathname) ? 'text-red-600 cursor-pointer '
                    : `${color} text-lg hover:text-red-600 cursor-pointer`
                }>
                    <Link
                        to='/'
                    >Главная</Link>
                </li>
                <li className={active === "/services" ? 'text-red-600 cursor-pointer '
                    : `${color} text-lg hover:text-red-600 cursor-pointer`
                }>
                    <Link
                        to='/services'
                    >Услуги</Link>
                </li>
                <li className={active === "/certificats" ? 'text-red-600 cursor-pointer '
                    : `${color} text-lg hover:text-red-600 cursor-pointer`
                }>
                    <Link
                        to='/certificats'
                    >Сертификаты</Link>
                </li>
                <li className={active === "/products" ? 'text-red-600 cursor-pointer '
                    : `${color} text-lg hover:text-red-600 cursor-pointer`
                }>
                    <Link
                        to='/products'
                    >Товары</Link>
                </li>
                <li className={active === "/about" ? 'text-red-600 cursor-pointer '
                    : `${color} text-lg hover:text-red-600 cursor-pointer`
                }>
                    <Link
                        to='/about'
                    >О Компании</Link>
                </li>
                <li className={active === "/contact" ? 'text-red-600 cursor-pointer '
                    : `${color} text-lg hover:text-red-600 cursor-pointer`
                }>
                    <Link
                        to='/contact'
                    >Контакт</Link>
                </li>
            </ul>
            <a href='tel:+77292333455' className={`rounded-full bg-red-600 text-white text-xl py-3 px-7 font-medium ${pied ? "hidden" : ""}`}><FontAwesomeIcon icon={faPhone} />   +7 (7292) 333 455 </a>
        </div>
    )
}

export default Menu