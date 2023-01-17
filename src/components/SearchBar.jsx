import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <div className='flex flex-col gap-8 p-8 bg-white drop-shadow-2xl w-[68rem] items-center rounded-sm'>
            <div className='text-2xl  tracking-tight text-black font-semibold flex gap-2'>
                <span className='text-red-500 w-16'><FontAwesomeIcon icon={faSearch} /></span> Какой продукт вы ищете?
            </div>
            <form className='flex gap-4'>
                <input type="text" name="" placeholder='название продукта' className='p-4 rounded w-72 focus:ring ring-slate-300 border-solid ring-1' />
                <select name="" id="" className='p-4 rounded w-72 focus:ring ring-slate-300 border-solid ring-1'>
                    <option value="Каталог" className='rounded p-4'>Каталог</option>
                    <option value="Приборы для спасения жизни" className='rounded p-4'>Приборы для спасения жизни</option>
                    <option value="Противопожарное оборудование" className='rounded p-4'>Противопожарное оборудование</option>
                </select>
                <button type="submit" className='bg-red-500 text-white text-xl py-3 rounded px-32 hover:bg-blue-500'>Поиск</button>
            </form>
        </div>
    )
}

export default SearchBar