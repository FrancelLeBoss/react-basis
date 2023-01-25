import React from 'react'
import { useState, useEffect } from 'react'
//import Google from "../assets/google.png"
//import Microsoft from "../assets/microsoft.png"
//import Yahoo from "../assets/yahoo.png"

const Partner = () => {

    const [valeurs, setValeur] = useState([0, 1, 2, 3, 4, 5])
    const zapper = (sens: string) => {
        const last = valeurs[valeurs.length - 1]
        const val = valeurs
        const first = valeurs[0]
        if (sens === "right") {
            //push ajoute un element en fin de tableau
            val.push(last + 1)
            //shift enleve un element en debut de tableau
            val.shift()
            setValeur(val)
            console.log({ valeurs })
        }
        else {
            //unshift ajoute un element en debut de tableau
            val.unshift(first - 1)
            //pop pour supprimer le dernier element du tableau
            val.pop()
            setValeur(val)
            console.log({ valeurs })
        }
    }

    const images = () => {
        return (
            <div className='px-16 flex gap-12 text-center relative bg-transparent items-center text-white capitlize py-8'>
                <img src="./google.png" className={`${valeurs.includes(0) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./microsoft.png" className={`${valeurs.includes(1) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./yahoo.png" className={`${valeurs.includes(2) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./google.png" className={`${valeurs.includes(3) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./microsoft.png" className={`${valeurs.includes(4) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./yahoo.png" className={`${valeurs.includes(5) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./google.png" className={`${valeurs.includes(6) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./microsoft.png" className={`${valeurs.includes(7) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />
                <img src="./yahoo.png" className={`${valeurs.includes(8) ? "max-w-[11rem]  p-4 hover:p-0" : "hidden"}`} alt='' />

            </div>
        )
    }

    useEffect(() => { images() }, [valeurs])

    return (
        images()
    )
}

export default Partner