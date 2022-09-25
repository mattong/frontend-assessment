import React from 'react'

const Banner = ({ header, subheader }) => {
  return <div className='banner'>
    <h1 className='banner__header'>{header}</h1>
    <p className='banner__subheader'>{subheader}</p>
  </div>
}

export default Banner