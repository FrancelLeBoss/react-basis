import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'
import TopBar from '../components/TopBar'
// import FirstImg from "../assets/1.jpg"
// import SecondImg from "../assets/2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import Partner from '../components/Partner'

const About = () => {
    const [afficher1, setAfficher1] = useState(true)
    const [afficher2, setAfficher2] = useState(false)
    const changer = () => {
        setAfficher1(!afficher1)
        setAfficher2(!afficher2)
    }

    useEffect(() => {
        //setInterval(() => changer(), 5000);
    }, []);

    return (
        <div>
            <TopBar light={true} />
            <Header />
            <Title page={"О Компании"} />
            <div className='flex justify-between p-16 gap-12 pb-24 border border-b mb-4'>
                <div className='flex-1 max-w-2xl flex flex-col gap-2 relative'>
                    <img src="./1.jpg" className={`${afficher1 === false ? "hidden" : ""}`} alt="" />
                    <img src="./2.jpg" className={`${afficher2 === false ? "hidden" : ""}`} alt="" />
                    <div className='absolute bottom-2 right-2 flex justify-between items-center gap-1' onClick={changer}>
                        <FontAwesomeIcon icon={faLeftLong} className="text-white bg-blue-400 p-2 rounded-2xl" size={"xs"} />
                        <FontAwesomeIcon icon={faRightLong} className="text-white bg-blue-400 p-2 rounded-2xl" size={"xs"} />
                    </div>
                </div>
                <div className='flex-1 py-8 flex flex-col gap-8 pl-4 '>
                    <div className='text-[2.5rem] tracking-wide font-bold leading-8 flex flex-col gap-4 font-serif'><span>Мы заботимся о вашей </span> <span>безопасности на море </span></div>
                    <div className='text-[1.35rem] leading-3 font-medium tracking-wide font-sans'>Trusted Dealer Network – Buy With Confidence</div>
                    <div className=' pr-24 text-[1.1rem] flex flex-col gap-8 leading-8 font-normal font-sans'>
                        <div>Turpis egestas tempus urna. Ipsum nunc aliquet biben dum enims facilisis auctor urna nunc id cursus metus. Sed id semper risus in hendrerit gravida. Sagittis purus sit amet volutpat sed consequat.</div>
                        <ul className='list-none flex flex-col gap-5 '>
                            <li className='flex gap-5 items-center'><FontAwesomeIcon icon={faDesktop} className="text-blue-700" size={"xs"} /><span>Aliquam at dolor eu nisi faucibus vehicula.</span></li>
                            <li className='flex gap-5 items-center'><FontAwesomeIcon icon={faDesktop} className="text-blue-700" size={"xs"} /><span>Aliquam at dolor eu nisi faucibus vehicula.</span></li>
                            <li className='flex gap-5 items-center'><FontAwesomeIcon icon={faDesktop} className="text-blue-700" size={"xs"} /><span>Aliquam at dolor eu nisi faucibus vehicula.</span></li>
                        </ul>
                        <div className='flex gap-8 items-center'>
                            <button className='bg-red-600 hover:bg-blue-600 text-white py-4 px-7 font-sans font-medium'>Latest Offers</button>
                            <a href="/" className='text-blue-600 underline font-sans font-medium'>Need Help? Read The Car Buying Guide</a>
                        </div>
                    </div>
                </div>
            </div>
            <Partner />
            <Footer />
        </div>
    )
}

export default About