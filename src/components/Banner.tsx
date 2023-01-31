import React from 'react'
//import Ban from "../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="h-[30rem] bg-cover bg-center flex gap-2 justify-center"
            style={{
                backgroundImage: `url("./banner.jpg")`,
                // background: "rgba(253, 120, 43, 0.69)",
                // position: "absolute",
                // borderRadius: "50%",
                //filter: "blur(1px)",
                // zIndex: -9
            }}>
            <div className='items-center flex flex-col gap-2 justify-center'>
                <div className='md:text-3xl text-3xl lg:text-4xl text-white font-bold tracking-tight capitalize '>MARINE TEAM</div>
                <div className='lg:text-2xl text-2xl text-white font-semibold items-center'>Наши знания  к вашим услугам</div>
                <div className='flex gap-6 flex-col sm:flex-row justify-start'>
                    <div><button className='bg-red-500 hover:bg-blue-500 tracking-tight text-xl text-white rounded py-2 px-3 font-semibold'>Наши услуги</button></div>
                    <div><button className='bg-white hover:bg-blue-500 tracking-tight text-xl lg:text-xl hover:text-white text-black rounded py-2 px-3 font-semibold'>Наш каталог</button></div>
                </div>
            </div>
        </div>
    )
}

export default Banner