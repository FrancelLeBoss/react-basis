import React from 'react'

interface props {
    page: string
}
const Title = ({ page }: props) => {
    return (
        <div className='flex flex-col lg:gap-4 gap-2 text-center bg-blue-900 text-white capitalize lg:py-16 py-12'>
            <div className='font-semibold text-2xl font-serif'>{page}</div>
            <div className='text-base font-sans'><a href='/' className='hover:text-red-500'>Главная</a> / {page}</div>
        </div>
    )
}

export default Title