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
            <div className="grid grid-cols-3 shadow bg-green-700">
                <img src={voiture.img} className="w-full h-auto col-span-1 col-start-1 hover:scale-125" alt={"Voiture " + voiture.title} />
                <div className='flex flex-col px-6 py-2 gap-2 bg-gray-200 w-full col-span-2'>
                    <div className='text-xl font-serif font-semibold'>{voiture?.title}</div>
                    <div className='text-lg font-serif font-semibold text-blue-600'>{voiture?.acceleration}</div>
                    <div className='text-base font-serif font-medium'>{voiture.desc}</div>
                    <ul className='flex items-center gap-2 list-none'>
                        <li className='text-base font-sans font-medium'>{voiture.power + " mi"}</li>
                        <li className='text-base font-sans font-medium'>{voiture.automatic ? "Automatic" : "Non automatic"}</li>
                        <li className='text-base font-sans font-medium'>{voiture.electric ? "Electrical" : "Non Electrical"}</li>
                        <li className='text-base font-sans font-medium capitalize'>{voiture.color}</li>
                    </ul>
                    <div className='text-2xl font-medium text-red-600 font-sans'>{"$" + voiture.price}</div>
                </div>
            </div>
        </div>

    );
}

export default CardH