import React, { useState } from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import TopBar from '../components/TopBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarked, faClock } from '@fortawesome/free-solid-svg-icons'
//import boat from "../assets/baot.jpg"
import Footer from '../components/Footer'

const Contact = () => {
    const [close1, setClose1] = useState(true)
    const [close2, setClose2] = useState(true)
    const [close3, setClose3] = useState(true)
    const [close4, setClose4] = useState(true)

    return (
        <div >
            <TopBar light={true} />
            <Header />
            <Title page="Свяжитесь с нами" />
            <div className='flex flex-wrap justify-center md:justify-between lg:gap:4 gap-6 lg:px-12 md:px-8 px-4  lg:py-12 md:py-8 py-6'>
                {/* Marine Team info */}
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='lg:text-[1.5rem] text-xl font-bold text-slate-900 pb-4'>Информация о Marine Team</div>
                    <div className='flex items-center gap-6 border-b border-inherit pb-4'>
                        <a href="tel:+77292333455"><FontAwesomeIcon icon={faPhone} className="text-blue-600 cursor-pointer text-xl bg-blue-100 py-3 px-4 rounded-full hover:bg-red-500 hover:py-4 hover:px-5 hover:rounded-full" /></a>
                        <div className='flex flex-col gap-2'>
                            <a href='tel:+77292333455' className='font-semibold text-base hover:text-red-600 cursor-pointer'>+7 (7292) 333 455 </a>
                            <div className='text-sm'>Что бы вас ни беспокоило, позвоните нам.</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 border-b border-inherit pb-8'>
                        <a href="mailto:info@marineteam.kz"><FontAwesomeIcon icon={faEnvelope} className="text-blue-600 cursor-pointer text-xl bg-blue-100 py-3 px-4 rounded-full hover:bg-red-500 hover:py-4 hover:px-5 hover:rounded-full" /></a>
                        <div className='flex flex-col gap-2'>
                            <a href="mailto:info@marineteam.kz" className='font-semibold text-base hover:text-red-600 cursor-pointer'>info@marineteam.kz </a>
                            <div className='text-sm'>Отправить нам письмо.</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 border-b border-inherit pb-8'>
                        <FontAwesomeIcon icon={faMapMarked} className="text-blue-600 cursor-pointer text-xl bg-blue-100 py-3 px-4 rounded-full hover:bg-red-500 hover:py-4 hover:px-5 hover:rounded-full" />
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold text-base hover:text-red-600 cursor-pointer'>12мкр., зд №79 , БЦ «Жастар», №111 оф</div>
                            <div className='text-sm'>Актау, Республика Казахстан</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 border-b border-inherit pb-8'>
                        <FontAwesomeIcon icon={faClock} className="text-blue-600 cursor-pointer text-xl bg-blue-100 py-3 px-4 rounded-full hover:bg-red-500 hover:py-4 hover:px-5 hover:rounded-full" />
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold text-base hover:text-red-600 cursor-pointer'>Время открытия</div>
                            <div className='text-sm'>Понедельник - пятница : с 8 утра до 9 вечера</div>
                        </div>
                    </div>
                </div>

                {/* Send a message */}
                <div className='flex flex-col lg:gap-4 gap-3 flex-1'>
                    <div className='text-xl font-bold text-slate-900 pb-4'>Напишите США</div>
                    <div className='flex gap-2 w-full'>
                        <div className=' flex-1 flex flex-col gap-1'><label htmlFor="firstname" className='font-light text-inherit'>Имя</label><input type="text" className='w-full p-2 border border-inherit rounded focus:outline hover:border hover:border-blue-400 focus:outline-blue-400' placeholder='Имя' name='firstname' id='firstname' /></div>
                        <div className=' flex-1 flex flex-col gap-1'><label htmlFor="lastname" className='font-light text-inherit'>фамилия</label><input type="text" className='w-full p-2 border border-inherit rounded focus:outline hover:border hover:border-blue-400 focus:outline-blue-400' placeholder='фамилия' name='lastname' id='lastname' /></div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <label htmlFor="address" className='font-light text-inherit'>Адрес</label>
                            <input type="text" className='w-full p-2 border border-inherit rounded focus:outline hover:border hover:border-blue-400 focus:outline-blue-400' placeholder='Адрес' name='address' id='address' />
                        </div>
                        <div className=' flex-1 flex flex-col gap-1'>
                            <label htmlFor="city" className='font-light text-inherit'>Город</label>
                            <input type="text" className='w-full p-2 border border-inherit rounded focus:outline hover:border hover:border-blue-400 focus:outline-blue-400' placeholder='Город' name='city' id='city' />
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="country" className='font-light text-inherit'>Страна</label>
                            <input type="text" className='w-full p-2 border border-inherit rounded focus:outline hover:border hover:border-blue-400 focus:outline-blue-400' placeholder='Страна' name='country' id='country' />
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="message" className='font-light text-inherit'>Твое сообщение</label>
                            <textarea className='w-full p-2 border border-inherit rounded focus:outline hover:border hover:border-blue-400 focus:outline-blue-400' placeholder='Твое сообщение' name='message' id='message' ></textarea>
                        </div>
                    </div>
                    <input type="submit" value={"Отправить сообщение"} className='w-full mt-2 p-2 border border-transparent rounded-sm bg-red-700 hover:bg-blue-600 text-white text-lg uppercase font-semibold' />

                </div>
            </div>
            <div className='md:mx-10 lg:mx-14 mx-8 bg-blue-200 flex flex-wrap lg:my-10 md:my-8 my-6'>
                <div className='flex-1 md:px-8 px-6 py-6 justify-center flex flex-col gap-6'>
                    <div className='md:text-2xl text-xl font-bold text-slate-900'>Читайте наши ЧЗВ</div>
                    <div className='flex flex-col gap-2'>
                        <div className=''>
                            <div className='flex items-center gap-3 px-4 py-3 lg:text-xl text-base text-blue-500 bg-white hover:bg-transparent'>
                                <div className='text-white text-xl font-bold bg-blue-500 py-1 px-[1rem]' onClick={() => {
                                    setClose1(!close1)
                                }}>{close1 ? "+" : "-"}</div>
                                <div className='font-semibold flex flex-col gap-2' onClick={() => {
                                    setClose1(!close1)
                                }}>
                                    Где вы находитесь ?
                                </div>
                            </div>
                            <div className={`px-4 py-3 text-xl bg-white ${close1 ? "hidden" : ""}`}>Curabitur lectus lacus, eleifend eu maximus malesuada sed ante. Vestibulum facilisis eget mauris ultrices blandit.</div>
                        </div>
                        <div className=''>
                            <div className='flex items-center gap-3 px-4 py-3  lg:text-xl text-base text-blue-500 bg-white hover:bg-transparent'>
                                <div className='text-white text-xl font-bold bg-blue-500 py-1 px-[1rem]' onClick={() => {
                                    setClose2(!close2)
                                }}>{close2 ? "+" : "-"}</div>
                                <div className='font-semibold flex flex-col gap-2' onClick={() => {
                                    setClose2(!close2)
                                }}>
                                    Сколько стоит инстинктор?
                                </div>
                            </div>
                            <div className={`px-4 py-3 text-xl bg-white ${close2 ? "hidden" : ""}`}>Curabitur lectus lacus, eleifend eu maximus malesuada sed ante. Vestibulum facilisis eget mauris ultrices blandit.</div>
                        </div>
                        <div className=''>
                            <div className='flex items-center gap-3 px-4 py-3  lg:text-xl text-base text-blue-500 bg-white hover:bg-transparent'>
                                <div className='text-white text-xl font-bold bg-blue-500 py-1 px-[1rem]' onClick={() => {
                                    setClose3(!close3)
                                }}>{close3 ? "+" : "-"}</div>
                                <div className='font-semibold flex flex-col gap-2' onClick={() => {
                                    setClose3(!close3)
                                }}>
                                    Где вы находитесь ?
                                </div>
                            </div>
                            <div className={`px-4 py-3 text-xl bg-white ${close3 ? "hidden" : ""}`}>Curabitur lectus lacus, eleifend eu maximus malesuada sed ante. Vestibulum facilisis eget mauris ultrices blandit.</div>
                        </div>
                        <div className=''>
                            <div className='flex items-center gap-3 px-4 py-3  lg:text-xl text-base text-blue-500 bg-white hover:bg-transparent'>
                                <div className='text-white text-xl font-bold bg-blue-500 py-1 px-[1rem]' onClick={() => {
                                    setClose4(!close4)
                                }}>{close4 ? "+" : "-"}</div>
                                <div className='font-semibold flex flex-col gap-2' onClick={() => {
                                    setClose4(!close4)
                                }}>
                                    Где вы находитесь ?
                                </div>
                            </div>
                            <div className={`px-4 py-3 text-xl bg-white ${close4 ? "hidden" : ""}`}>Curabitur lectus lacus, eleifend eu maximus malesuada sed ante. Vestibulum facilisis eget mauris ultrices blandit.</div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 h-[33rem] bg-center text-transparent'
                    style={{
                        backgroundImage: `url("./baot.jpg")`
                    }}></div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact