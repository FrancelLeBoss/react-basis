import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireExtinguisher, faAnchor, faGears } from '@fortawesome/free-solid-svg-icons'

const Bloc = () => {
    return (
        <div>
            <div className='flex mx-48 my-10 gap-8 justify-between'>
                <div className='flex flex-col gap-8'>
                    <FontAwesomeIcon icon={faFireExtinguisher} size={"7x"} className="p-9 rounded bg-blue-100 text-blue-600 hover:text-red-500" />
                    <div className='flex flex-col gap-5 text-center'><div className='font-bold text-xl'>ПРОТИВОПОЖАРНОЕ ОБОРУДОВАНИЕ</div><div className='text-base'>«Мarine Team» осуществляет поставку ПО и всех видов услуг для ПО в соответствии с законодательством РК и Конвенцией SOLAS 74…</div></div>
                </div>
                <div className='flex flex-col gap-8'>
                    <FontAwesomeIcon icon={faAnchor} size={"7x"} className="p-9 rounded bg-blue-100 text-blue-600 hover:text-red-500" />
                    <div className='flex flex-col gap-5 text-center '><div className='font-bold text-xl'>СПАСАТЕЛЬНОЕ УСТРОЙСТВО</div><div>Безопасность пассажиров и экипажа на судах имеет первостепенное значение, когда суда осуществляют свою коммерческую деятельность…</div></div>
                </div>
                <div className='flex flex-col gap-8'>
                    <FontAwesomeIcon icon={faGears} size={"7x"} className="p-9 rounded bg-blue-100 text-blue-600 hover:text-red-500" />
                    <div className='flex flex-col gap-5 text-center'><div className='font-bold text-xl'>ГРУЗОПОДЪЕМНОЕ ОБОРУДОВАНИЕ</div><div>Личное: спасательный круг, спасательный жилет, гидрокостюм, защитный костюм, теплозащитные средства, дыхательный аппарат…</div></div>
                </div>
            </div>
        </div>
    )
}

export default Bloc