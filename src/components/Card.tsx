import React from 'react'
import CardH from './CardH';
import CardV from './CardV';

interface voiture {
    id: number;
    title: string;
    electric: boolean;
    automatic: boolean;
    color: string;
    price: number;
    power: number;
    img: string;
    acceleration: string;
    desc: string;
}

interface props {
    voiture: voiture,
    orientation: "H" | "V"
}

const Card = ({ voiture, orientation }: props) => {
    const H = orientation === "H"
    const V = orientation === "V"
    return (
        <div>
            {H && <CardH voiture={voiture} />}
            {V && <CardV voiture={voiture} />}
        </div>
    );
}

export default Card