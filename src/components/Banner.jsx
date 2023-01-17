import React from 'react'
import Ban from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="`h-[32rem]` bg-cover bg-center "
            style={{
                backgroundImage: `url(${Ban})`,
                // background: "rgba(253, 120, 43, 0.69)",
                // position: "absolute",
                // borderRadius: "50%",
                // filter: "blur(158px)",
                // zIndex: -9
            }}>
            <div className='pt-24 pl-56 flex flex-col gap-8 text-justify'>
                <div className='text-4xl text-white font-bold tracking-tight capitalize'>MARINE TEAM LLP</div>
                <div className='text-2xl text-white font-normal '>Наши знания  к вашим услугам</div>
                <div className='flex gap-8'>
                    <button className='bg-red-500 hover:bg-blue-500 tracking-tight text-xl text-white rounded py-4 px-6 font-semibold'>Наши услуги</button>
                    <button className='bg-white hover:bg-blue-500 tracking-tight text-xl hover:text-white text-black rounded py-4 px-6 font-semibold'>Наш каталог</button>
                </div>
            </div>
        </div>
    )
}

export default Banner