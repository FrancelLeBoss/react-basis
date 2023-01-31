import React from 'react'

interface voiture {
    id: number;
    title: string;
    electric: boolean;
    automatic: boolean;
    color: string;
    price: number;
    power: number;
    img: string;
    acceleration: string;
    desc: string;
}

interface props {
    voiture: voiture
}

const CardV = ({ voiture }: props) => {
    return (
        <div className='relative'>
            <div className='flex p-24 flex-col gap-3 items-center justify-center absolute top-0 left-0 transition delay-150 duration-300 bg-blue-900 w-full h-auto opacity-0 hover:opacity-80'>
                <div className='text-2xl text-white font-serif'>{voiture.title}</div>
                <div className='text-xl text-white font-serif font-medium'>{voiture?.acceleration}</div>
            </div>
            <div className="flex flex-col flex-wrap shadow justify-center">
                <div className='basis-2/3'><img src={voiture.img} className="" alt={"Voiture " + voiture.title} /></div>
                <div className='basis-1/3 flex flex-col px-3 lg:px-6 py-1 lg:gap-2 gap-1 bg-blue-200'>
                    <div className='lg:text-xl text-base font-serif font-semibold'>{voiture.title}</div>
                    <ul className='flex items-center gap-1 flex-wrap list-none'>
                        <li className='lg:text-base text-sm font-sans font-light'>{voiture.power + " mi"}</li>
                        <li className='lg:text-base text-sm  font-sans font-light'>{voiture.automatic ? "Automatic" : "Non automatic"}</li>
                        <li className='lg:text-base text-sm  font-sans font-light'>{voiture.electric ? "Electrical" : "Non Electrical"}</li>
                        <li className='lg:text-base text-sm  font-sans font-light capitalize'>{voiture.color}</li>
                    </ul>
                    <hr />
                    <div className='lg:text-base text-sm font-medium font-mono'>Price : <span className='text-red-600 font-sans text-base lg:text-xl'>{"$" + voiture.price}</span></div>
                </div>
            </div>
        </div>

    );
}

export default CardV