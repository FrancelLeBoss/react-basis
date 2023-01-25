import React from 'react'

interface props {
    onClickCallback: any
}
export default function SortMenu({ onClickCallback }: props) {
    return (
        <>
            <div className='border divide-y flex flex-col'>
                <div className="px-3 py-2 cursor-pointer hover:text-blue-600" onClick={() => onClickCallback(6)}>Show 6 Products</div>
                <div className="px-3 py-2 cursor-pointer hover:text-blue-600" onClick={() => onClickCallback(12)}>Show 12 Products</div>
                <div className="px-3 py-2 cursor-pointer hover:text-blue-600" onClick={() => onClickCallback(16)}>Show 16 Products</div>
            </div>
        </>
    )
}