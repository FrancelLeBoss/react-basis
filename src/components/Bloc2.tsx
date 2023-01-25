import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const Bloc2 = () => {
    return (
        <div className='bg-blue-900 py-32 px-16 flex flex-col text-center gap-4'>
            <div className=''><FontAwesomeIcon icon={faPeopleGroup} size={"4x"} className="text-white" /></div>
            <div className='text-2xl font-semibold text-white'>Международная Ассоциация Классификационных Обществ (МАКО)</div>
        </div>
    )
}

export default Bloc2