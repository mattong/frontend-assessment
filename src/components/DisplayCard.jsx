import React from 'react'

const DisplayCard = ({ imageSrc, text }) => {
  return <div className='display-card'>
    <img src={imageSrc} alt='' />
    <p className='display-card__text'>{text}</p>
    <button type='button' className='display-card__button'>Read more</button>
  </div>
}

export default DisplayCard