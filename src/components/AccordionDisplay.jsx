import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import data from './../data.json'

const AccordionDisplay = () => {
  return <Accordion defaultActiveKey={data[0].title}>
    {data.map(item => (
      <Accordion.Item eventKey={item.title} key={item.title}>
        <Accordion.Header>{item.title}</Accordion.Header>
        <Accordion.Body>{item.content}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
}

export default AccordionDisplay