import React from 'react'

export default function Menu2({ onClickCallback }) {
    return (
        <>
            <div className='border divide-y flex flex-col'>
                <a className="px-3 py-2 cursor-pointer hover:text-blue-600" onClick={() => onClickCallback("id", "Default")}>Sort by <span className='font-semibold'>Default</span></a>
                <a className="px-3 py-2 cursor-pointer hover:text-blue-600" onClick={() => onClickCallback("price", "Price")}>Sort by <span className='font-semibold'>Price</span></a>
                <a className="px-3 py-2 cursor-pointer hover:text-blue-600" onClick={() => onClickCallback("title", "Name")}>Sort by <span className='font-semibold'>Name</span></a>
            </div>
        </>
    )
}