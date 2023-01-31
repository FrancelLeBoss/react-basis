import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <div className='flex flex-col gap-8 p-8 bg-white drop-shadow-2xl  items-center rounded-sm'>
            <div className='lg:text-2xl text-xl  tracking-tight text-black font-semibold flex gap-4 items-center'>
                <FontAwesomeIcon icon={faSearch} size={"xl"} className="text-red-500" />
                <span>Какой продукт вы ищете?</span>
            </div>
            <div className='flex flex-wrap justify-between gap-4 w-full'>
                <input type="text" name="" placeholder='название продукта' className='p-2 lg:p-3 rounded focus:ring flex-1 outline-none ring-slate-300 border-solid ring-1' />
                <select name="" id="" className='p-2 lg:p-3 rounded flex-1 focus:ring ring-slate-300 text-sm border-solid ring-1 outline-none'>
                    <option value="Каталог">Каталог</option>
                    <option value="Приборы для спасения жизни">Приборы для спасения жизни</option>
                    <option value="Противопожарное оборудование">Противопожарное оборудование</option>
                </select>
                <button type="submit" className='bg-red-500 text-white text-xl p-1 lg:p-2 rounded flex-1 hover:bg-blue-500'>Поиск</button>
            </div>
        </div>
    )
}

export default SearchBar