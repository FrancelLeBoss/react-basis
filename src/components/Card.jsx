import React from 'react'
import CardH from './CardH';
import CardV from './CardV';

const Card = ({ voiture, orientation }) => {
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