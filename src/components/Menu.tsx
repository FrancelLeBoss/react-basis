import React, { useRef } from 'react'
//import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPen, faLock, faBars, faClose, faUser, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import MyModal from './Dialog';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, setUserLogged } from '../feature/usersSlice';
// import TextField from './bootstrap/TextField';

interface props {
    pied: boolean,
    color: string
}
const Menu = ({ pied, color }: props) => {
    const [active, setActive] = useState("/")
    const inputNom = useRef() as React.MutableRefObject<HTMLInputElement>;
    const inputPrenom = useRef() as React.MutableRefObject<HTMLInputElement>;
    const inputEmail = useRef() as React.MutableRefObject<HTMLInputElement>;
    const inputPassword = useRef() as React.MutableRefObject<HTMLInputElement>;
    const formRef = useRef() as React.RefObject<HTMLFormElement>;
    //ref for the login form
    const loginEmail = useRef() as React.MutableRefObject<HTMLInputElement>;
    const loginPassword = useRef() as React.MutableRefObject<HTMLInputElement>;
    const loginRef = useRef() as React.RefObject<HTMLFormElement>;
    const val = ["/services", "/certificats", "/products", "/about", "/contact"]
    const [msgUserCreated, setMsgUserCreated] = useState<boolean>(false)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [openDialogLogin, setOpenDialogLogin] = useState<boolean>(false)
    const [openDialogLogout, setOpenDialogLogout] = useState<boolean>(false)
    const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false)
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.users.logged)
    const users = useSelector((state: any) => state.users.data)

    const onSubmit = (e?: any) => {
        //e.preventDefault();
        const data = {
            nom: inputNom.current.value,
            prenom: inputPrenom.current.value,
            email: inputEmail.current.value,
            password: inputPassword.current.value
            //   photo: `https://picsum.photos/400/${Math.round(
            //     Math.random() * 200 + 300
            //   )}`,
        }
        axios.post("http://localhost:5000/users", data).then(() => {
            dispatch(addUsers(data));
            setMsgUserCreated(true)
            dispatch(setUserLogged(data));
            //formRef.current.reset();
        });
    }
    const logoutSubmit = (e?: any) => {
        dispatch(setUserLogged({}))
        setOpenDialogLogout(false)
    }
    const loginSubmit = (e?: any) => {
        const data = {
            email: loginEmail.current.value,
            password: loginPassword.current.value
        }
        const f: any = users.filter((u: any) => u.email === data.email)
        if (f.length !== 1) { alert("Invalid login or password") }
        else {
            if (f[0].password === data.password) {
                alert("Login succeeded")
                dispatch(setUserLogged(f[0]))
                setOpenDialogLogin(false)
            }
            else {
                alert("Invalid login or password")
            }
        }
    }
    const formulaire = () => {
        return <form method="post" ref={formRef} className='flex flex-col gap-2 py-2'>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-sm'>Фамилия</div><input ref={inputNom} type="text" name='nom' className='col-span-3 p-2 text-sm border outline-[2px] outline-blue-300 rounded' /></div>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-sm'>Имя</div><input ref={inputPrenom} type="text" name="prenom" className='col-span-3 p-2 text-sm border outline-[2px] outline-blue-300 rounded' /></div>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-sm'>Эл. адрес</div><input ref={inputEmail} type="email" name="email" className='col-span-3 p-2 text-sm border outline-[2px] outline-blue-300 rounded' /></div>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-sm'>Пароль</div><input ref={inputPassword} type="password" name="password" className='col-span-3 p-2 text-sm border outline-[2px] outline-blue-300 rounded' /></div>
        </form>
    }

    const loginForm = () => {
        return <form method="post" ref={loginRef} className='flex flex-col gap-2 py-2'>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-sm'>Эл. адрес</div><input ref={loginEmail} type="email" name="email" className='col-span-3 p-2 text-sm border outline-[2px] outline-blue-300 rounded' /></div>
            <div className='grid grid-cols-4 gap-2 items-center'><div className='col-span-1 text-sm'>Пароль</div><input ref={loginPassword} type="password" name="password" className='col-span-3 p-2 text-sm border outline-[2px] outline-blue-300 rounded' /></div>
        </form>
    }
    const mobileMenu = () => {

        const styleActive = "px-6 text-white cursor-pointer bg-blue-500 py-1"
        const styleNormal = ` px-6 text-lg text-white hover:text-white cursor-pointer hover:bg-blue-500`

        return <div className='bg-blue-900 pb-2'>
            <ul className={`bg-blue-900 pb-2 flex flex-col list-none text-white font-light gap-3 rounded`}>
                <li className={active === "/" ? styleActive
                    : styleNormal
                }>
                    <Link
                        to='/'
                    >Главная</Link>
                </li>
                <li className={active === "/services" ? styleActive
                    : styleNormal
                }>
                    <Link
                        to='/services'
                    >Услуги</Link>
                </li>
                <li className={active === "/certificats" ? styleActive
                    : styleNormal
                }>
                    <Link
                        to='/certificats'
                    >Сертификаты</Link>
                </li>
                <li className={active === "/products" ? styleActive
                    : styleNormal
                }>
                    <Link
                        to='/products'
                    >Товары</Link>
                </li>
                <li className={active === "/about" ? styleActive
                    : styleNormal
                }>
                    <Link
                        to='/about'
                    >О Компании</Link>
                </li>
                <li className={active === "/contact" ? styleActive
                    : styleNormal
                }>
                    <Link
                        to='/contact'
                    >Контакт</Link>
                </li>
            </ul>
            {
                user.nom ?
                    <div className={`gap-2 hidden ${pied ? "" : "lg:flex"}`}>
                        <button onClick={() => setOpenDialog(!openDialog)} className='border text-[0.7rem] px-1 py-1 rounded  lowercase bg-white text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900 flex items-center gap-1'><FontAwesomeIcon icon={faUser} /> <span>{user.nom}</span></button>
                        <button onClick={() => setOpenDialogLogin(!openDialogLogin)} className='border text-[0.7rem] px-1 py-1 rounded  lowercase bg-white text-red-700 border-transparent hover:text-white hover:bg-red-700 flex items-center gap-1'><FontAwesomeIcon icon={faDoorOpen} /><span>выйти</span></button>
                    </div>
                    :
                    <div className={`gap-2 hidden ${pied ? "" : "lg:flex"}`}>
                        <button onClick={() => setOpenDialog(!openDialog)} className='border text-[0.7rem] px-1 py-1 rounded  lowercase bg-white text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900 flex items-center gap-1'><FontAwesomeIcon icon={faPen} /> <span>регистр</span></button>
                        <button onClick={() => setOpenDialogLogin(!openDialogLogin)} className='lowercase bg-blue-900 text-white border-blue-900 hover:bg-white hover:text-blue-900 border text-[0.7rem] px-1 py-1 rounded flex gap-1 items-center'><FontAwesomeIcon icon={faLock} /><span>авторизоваться</span></button>
                    </div>
            }
        </div>
    }

    useEffect(() => {
        setActive(window.location.pathname)
    }, [])

    return (
        <div>
            {openDialog && <MyModal title="регистр" open={openDialog} onClose={() => setOpenDialog(false)} onSubmit={!msgUserCreated ? onSubmit : () => { }} >
                {!msgUserCreated ? formulaire() :
                    <div className='p-4 text-base text-green-400'>User created successfully !</div>
                }
            </MyModal>}
            {openDialogLogin && <MyModal title="Авторизоваться" open={openDialogLogin} onClose={() => setOpenDialogLogin(false)} onSubmit={loginSubmit} >
                {loginForm()}
            </MyModal>}
            {openDialogLogout && <MyModal title="Confirmation" open={openDialogLogout} onClose={() => setOpenDialogLogout(false)} onSubmit={logoutSubmit} >
                <div className='p-4 text-base'>confirm if you really want to logout</div>
            </MyModal>}
            <div className={` ${pied ? "px-8 lg:px-16 md:px-12 py-12 flex justify-center items-center font-serif" : "relative font-serif px-8 lg:px-16 md:px-12 py-4 flex justify-between items-center"}`}>
                <div className={`${pied ? "hidden" : "flex"}`}>
                    <Link
                        to='/'
                    >
                        <img src="./logo.png" alt="" className='cursor-pointer max-w-12 max-h-12 lg:max-w-20 lg:max-h-20' />
                    </Link>
                </div>
                <ul className={` ${!pied ? "hidden lg:flex gap-4" : "flex flex-wrap gap-6 lg:gap-8 lg:justify-around justify-center"}   list-none font-semibold items-center text-sm`}>
                    <li className={!val.includes(window.location.pathname) ? 'text-red-600 cursor-pointer '
                        : `${color} text-sm hover:text-red-600 cursor-pointer`
                    }>
                        <Link
                            to='/'
                        >Главная</Link>
                    </li>
                    <li className={active === "/services" ? 'text-red-600 cursor-pointer '
                        : `${color} text-sm hover:text-red-600 cursor-pointer`
                    }>
                        <Link
                            to='/services'
                        >Услуги</Link>
                    </li>
                    <li className={active === "/certificats" ? 'text-red-600 cursor-pointer '
                        : `${color} text-sm hover:text-red-600 cursor-pointer`
                    }>
                        <Link
                            to='/certificats'
                        >Сертификаты</Link>
                    </li>
                    <li className={active === "/products" ? 'text-red-600 cursor-pointer '
                        : `${color} text-sm hover:text-red-600 cursor-pointer`
                    }>
                        <Link
                            to='/products'
                        >Товары</Link>
                    </li>
                    <li className={active === "/about" ? 'text-red-600 cursor-pointer '
                        : `${color} text-sm hover:text-red-600 cursor-pointer`
                    }>
                        <Link
                            to='/about'
                        >О Компании</Link>
                    </li>
                    <li className={active === "/contact" ? 'text-red-600 cursor-pointer '
                        : `${color} text-sm hover:text-red-600 cursor-pointer`
                    }>
                        <Link
                            to='/contact'
                        >Контакт</Link>
                    </li>
                </ul>
                <div className={`lg:hidden ${!showSmallMenu ? "hidden" : ""} absolute right-16 top-[4.3rem]`}>{mobileMenu()}</div>
                {
                    user.nom ?
                        <div className={`gap-2 hidden ${pied ? "" : "lg:flex"}`}>
                            <button onClick={() => setOpenDialog(!openDialog)} className='border text-[0.7rem] px-1 py-1 rounded  lowercase bg-white text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900 flex items-center gap-1'><FontAwesomeIcon icon={faUser} /> <span>{user.nom}</span></button>
                            <button onClick={() => setOpenDialogLogout(!openDialogLogout)} className='border text-[0.7rem] px-1 py-1 rounded  lowercase bg-white text-red-700 border-transparent hover:text-white hover:bg-red-700 flex items-center gap-1'><FontAwesomeIcon icon={faDoorOpen} /><span>выйти</span></button>
                        </div>
                        :
                        <div className={`gap-2 hidden ${pied ? "" : "lg:flex"}`}>
                            <button onClick={() => setOpenDialog(!openDialog)} className='border text-[0.7rem] px-1 py-1 rounded  lowercase bg-white text-blue-900 border-blue-900 hover:text-white hover:bg-blue-900 flex items-center gap-1'><FontAwesomeIcon icon={faPen} /> <span>регистр</span></button>
                            <button onClick={() => setOpenDialogLogin(!openDialogLogin)} className='lowercase bg-blue-900 text-white border-blue-900 hover:bg-white hover:text-blue-900 border text-[0.7rem] px-1 py-1 rounded flex gap-1 items-center'><FontAwesomeIcon icon={faLock} /><span>авторизоваться</span></button>
                        </div>
                }
                <a href='tel:+77292333455' className={`rounded-full hidden items-center bg-red-600 text-white text-base py-3 px-5 font-medium ${pied ? "" : " xl:flex"}`}><FontAwesomeIcon icon={faPhone} />   +7 (7292) 333 455 </a>
                <div className={`text-blue-900 ${!pied ? "lg:hidden" : ""}`} onClick={() => setShowSmallMenu(!showSmallMenu)}><FontAwesomeIcon icon={showSmallMenu ? faClose : faBars} size="xl" /></div>
            </div>
        </div>
    )
}

export default Menu