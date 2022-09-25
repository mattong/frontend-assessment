import React from 'react'

const Card = ({ imageSrc, text }) => {
  return <div className='card'>
    <img src={imageSrc} alt='' />
    <p className='card__text'>{text}</p>
    <button type='button' className='card__button'>Read more</button>
  </div>
}

export default Card