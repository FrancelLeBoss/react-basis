import React from 'react'

const CardV = ({ voiture, orientation }) => {
    return (
        <div className='relative'>
            <div className='flex p-24 flex-col gap-3 items-center justify-center absolute top-0 left-0 transition delay-150 duration-300 bg-blue-900 w-full h-auto opacity-0 hover:opacity-80'>
                <div className='text-2xl text-white font-serif'>{voiture.title}</div>
                <div className='text-xl text-white font-serif font-medium'>{voiture?.acceleration}</div>
            </div>
            <div className="grid grid-rows-3 shadow">
                <img src={voiture.img} className="w-full h-auto row-span-2 row-start-1" alt={"Voiture " + voiture.title} />
                <div className='flex flex-col px-6 py-2 gap-2 bg-blue-200'>
                    <div className='text-xl font-serif font-semibold'>{voiture.title}</div>
                    <ul className='flex items-center gap-2 list-none'>
                        <li className='text-base font-sans font-medium'>{voiture.power + " mi"}</li>
                        <li className='text-base font-sans font-medium'>{voiture.automatic ? "Automatic" : "Non automatic"}</li>
                        <li className='text-base font-sans font-medium'>{voiture.electric ? "Electrical" : "Non Electrical"}</li>
                        <li className='text-base font-sans font-medium capitalize'>{voiture.color}</li>
                    </ul>
                    <hr />
                    <div className='text-xl font-medium font-mono'>Price : <span className='text-red-600 font-sans text-2xl'>{"$" + voiture.price}</span></div>
                </div>
            </div>
        </div>

    );
}

export default CardV