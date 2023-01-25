import React from 'react'

interface props {
    page: string
}
const Title = ({ page }: props) => {
    return (
        <div className='flex flex-col gap-4 text-center bg-blue-900 text-white capitalize py-24'>
            <div className='font-semibold text-3xl font-serif'>{page}</div>
            <div className='text-xl font-sans'><a href='/' className='hover:text-red-500'>Главная</a> / {page}</div>
        </div>
    )
}

export default Title