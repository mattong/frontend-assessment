import React, { useState, useEffect } from 'react'
import AccordionDisplay from './AccordionDisplay'
import TabsDisplay from './TabsDisplay'

const Exercise2 = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const BREAKPOINT = 768

  const updateInnerWidth = () => {
    console.log(window.innerWidth)
    setInnerWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateInnerWidth)

    // to remove event listener when component unmounts
    return () => window.removeEventListener('resize', updateInnerWidth)
  }, [])

  return innerWidth < BREAKPOINT ? <AccordionDisplay /> : <TabsDisplay />
}

export default Exercise2