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

const CardH = ({ voiture }: props) => {
    return (
        <div className='relative'>
            <div className="flex items-center flex-nowrap shadow bg-green-700">
                <div className='basis-1/2'><img src={voiture.img} className=" hover:scale-125" alt={"Voiture " + voiture.title} /></div>
                <div className='basis-2/3 flex flex-col px-2 py-1 gap-1 bg-gray-200'>
                    <div className='xl:text-xl text-base font-serif font-semibold'>{voiture?.title}</div>
                    <div className='xl:text-base text-sm font-serif font-semibold text-blue-600'>{voiture?.acceleration}</div>
                    <div className='text-sm xl:text-base font-serif font-medium'>{voiture.desc}</div>
                    <ul className='flex flex-wrap items-center gap-1 list-none font-sans font-medium'>
                        <li className='text-sm xl:text-base '>{voiture.power + " mi"}</li>
                        <li className='text-sm xl:text-base '>{voiture.automatic ? "Automatic" : "Non automatic"}</li>
                        <li className='text-sm xl:text-base'>{voiture.electric ? "Electrical" : "Non Electrical"}</li>
                        <li className='text-sm xl:text-base capitalize'>{voiture.color}</li>
                    </ul>
                    <div className='text-xl font-medium text-red-600 font-sans'>{"$" + voiture.price}</div>
                </div>
            </div>
        </div>

    );
}

export default CardH