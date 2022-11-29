import React from 'react'
import Sidebar from '../Sidebar'
import Content from './Content'
import Story from './Story'

const Beranda = () => {
  return (
      <div className='w-full min-h-screen flex flex-row'>
        <Sidebar />
        <Content />
        <Story />
    </div>
  )
}

export default Beranda