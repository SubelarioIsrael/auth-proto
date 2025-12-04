import React from 'react'
import './Card.css'

interface Props {
    recipeName: string;
    description: string;
    price: string;
    imageUrl: string;
}

const Card = ({imageUrl, recipeName, price, description}: Props) => {
  return (
    <div className='card'>
        <img src={imageUrl} alt="Image" />
        <div className="details">
            <h2>{recipeName}</h2>
            <p>{price}</p>
        </div>
        <p className="info">
            {description}
        </p>
    </div>
  )
}

export default Card