import React from 'react'
//import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPen, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import MyModal from './Dialog';
// import TextField from './bootstrap/TextField';

interface props {
    pied: boolean,
    color: string
}



const Menu = ({ pied, color }: props) => {
    const [active, setActive] = useState("/")
    const val = ["/services", "/certificats", "/products", "/about", "/contact"]
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [formState, setFormState] = useState<any>({
        values: {},
        errors: {},
        isValid: false,
        isSubmit: false
    })

    const handleChange = (props: string, value: string) => {
        setFormState((formState: any) => ({
            ...formState,
            touched: {
                ...formState.touched,
                [props]: true,
            },
            values: {
                ...formState.values,
                [props]: value,
            },
        }));

        console.log({ formState })
    }

    const onSubmit = () => {

    }

    const formulaire = () => {
        console.log({ formState })
        return <form action="" method="post" className='flex flex-col gap-2 py-4'>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-lg'>Nom</div><input type="text" name='nom' className='col-span-3 p-2 text-lg border outline-[2px] outline-blue-300 rounded' value={formState.values.name} onChange={(e) => handleChange("nom", e.target.value)} /></div>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-lg'>Prenom</div><input type="text" name="prenom" className='col-span-3 p-2 text-lg border outline-[2px] outline-blue-300 rounded' value={formState.values.prenom} onChange={(e) => handleChange("prenom", e.target.value)} /></div>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-lg'>Email</div><input type="email" name="email" className='col-span-3 p-2 text-lg border outline-[2px] outline-blue-300 rounded' value={formState.values.email} onChange={(e) => handleChange("email", e.target.value)} /></div>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-lg'>Password</div><input type="password" name="password" className='col-span-3 p-2 text-lg border outline-[2px] outline-blue-300 rounded' value={formState.values.password} onChange={(e) => handleChange("password", e.target.value)} /></div>
            {/* <TextField /> */}
        </form>
    }
    useEffect(() => {
        setActive(window.location.pathname)
    }, [])

    return (
        <div>
            {openDialog && <MyModal title="регистр" open={openDialog} onClose={() => setOpenDialog(false)} onSubmit={onSubmit} >
                {formulaire()}
            </MyModal>}
            <div className={` ${pied ? "px-16 py-12 flex justify-center items-center font-serif" : "font-serif px-16 py-4 flex justify-between items-center"}`}>
                <div className={`${pied ? "hidden" : ""}`}>
                    <Link
                        to='/'
                    >
                        <img src="./logo.png" alt="" className='cursor-pointer w-20 h-20' />
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
                <div className={`flex gap-2 ${pied ? "hidden" : ""}`}><button onClick={() => setOpenDialog(!openDialog)} className='border text-sm px-2 py-2 rounded  lowercase bg-white text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900 flex items-center gap-1'><FontAwesomeIcon icon={faPen} /> <span>регистр</span></button><button className='lowercase bg-blue-900 text-white border-blue-900 hover:bg-white hover:text-blue-900 border text-sm px-2 py-2 rounded flex gap-1 items-center'><FontAwesomeIcon icon={faLock} /><span>авторизоваться</span></button></div>
                <a href='tel:+77292333455' className={`rounded-full bg-red-600 text-white text-xl py-3 px-7 font-medium ${pied ? "hidden" : ""}`}><FontAwesomeIcon icon={faPhone} />   +7 (7292) 333 455 </a>
            </div>
        </div>
    )
}

export default Menu