import React from 'react'
import logo from '../assets/Instagram_logo.png'
import {AiFillHome, AiOutlineCompass, AiOutlineHeart, AiOutlinePlusSquare} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'

const Sidebar = () => {
    const menu = [
        {name: "Beranda", icon: <AiFillHome />},
        {name: "Cari", icon: <BsSearch />},
        {name: "Jelajahi", icon: <AiOutlineCompass />},
        {name: "Pesan", icon: <RiMessengerLine />},
        {name: "Notifikasi", icon: <AiOutlineHeart />},
        {name: "Buat", icon: <AiOutlinePlusSquare />},
        {name: "Profile", icon: <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-6 w-6 object-cover rounded-full" />},
    ]
  return (
    <div className='h-screen w-56 px-5'>
        <div className='flex flex-row pt-8'>
        <img src={logo} alt="logo" className='w-15 h-9 mb-10' />
        </div>
        <div className='space-y-9'>
        {
            menu.map((val, index) => {
                return <li key={index} className="flex flex-row items-center">
                    <div className='text-2xl mr-3'>{val.icon}</div>
                    <div className='text-base'>{val.name}</div>
                </li>
            })
        }
        </div>
    </div>
  )
}

export default Sidebar