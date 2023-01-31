import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireExtinguisher, faAnchor, faGears } from '@fortawesome/free-solid-svg-icons'

const Bloc = () => {
    return (
        <div>
            <div className='flex flex-wrap  px-24 py-10 gap-4 justify-between'>
                <div className='flex flex-col gap-4 lg:gap-8 flex-1'>
                    <FontAwesomeIcon icon={faFireExtinguisher} size={"5x"} className="p-9 rounded bg-blue-100 text-blue-600 hover:text-red-500" />
                    <div className='flex flex-col lg:gap-5 gap-3 text-center'><div className='font-bold text-base lg:text-xl'>ПРОТИВОПОЖАРНОЕ ОБОРУДОВАНИЕ</div><div className='text-sm'>«Мarine Team» осуществляет поставку ПО и всех видов услуг для ПО в соответствии с законодательством РК и Конвенцией SOLAS 74…</div></div>
                </div>
                <div className='flex flex-col gap-4 lg:gap-8 flex-1'>
                    <FontAwesomeIcon icon={faAnchor} size={"5x"} className="p-9 rounded bg-blue-100 text-blue-600 hover:text-red-500" />
                    <div className='flex flex-col lg:gap-5 gap-3 text-center '><div className='font-bold text-base lg:text-xl'>СПАСАТЕЛЬНОЕ УСТРОЙСТВО</div><div className='text-sm'>Безопасность пассажиров и экипажа на судах имеет первостепенное значение, когда суда осуществляют свою коммерческую деятельность…</div></div>
                </div>
                <div className='flex flex-col gap-4 lg:gap-8 flex-1'>
                    <FontAwesomeIcon icon={faGears} size={"5x"} className="p-9 rounded bg-blue-100 text-blue-600 hover:text-red-500" />
                    <div className='flex flex-col lg:gap-5 gap-3 text-center'><div className='font-bold text-base lg:text-xl'>ГРУЗОПОДЪЕМНОЕ ОБОРУДОВАНИЕ</div><div className='text-sm'>Личное: спасательный круг, спасательный жилет, гидрокостюм, защитный костюм, теплозащитные средства, дыхательный аппарат…</div></div>
                </div>
            </div>
        </div>
    )
}

export default Bloc