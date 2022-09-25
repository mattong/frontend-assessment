import React from 'react'
import data from './../data.json'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const TabsDisplay = () => {
  return <Tabs defaultActiveKey={data[0].title}>
    {data.map(item => (
      <Tab eventKey={item.title} title={item.title} key={item.title}>
        {item.content}
      </Tab>
    ))}
  </Tabs>
}

export default TabsDisplay