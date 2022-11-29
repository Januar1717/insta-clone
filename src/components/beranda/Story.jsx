import React from 'react'

const Story = () => {
    const peoples = [
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
        {nama:"Dinda Ayu Lestari", 
        gambar:<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg" alt="user" className="h-16 w-16 object-cover rounded-full" />},
    ] 

  return (

    <div className='content flex flex-col flex-1 h-screen bg-gray-200 pt-7 -ml-1 overflow-y-scroll'>
        <div className='mb-3 font-bold'>Cerita</div>
        <div className='space-y-5'>
        {
            peoples.map((val, index) => {
                return <li key={index} className="flex flex-row items-center">
                    <div className='mr-3'>{val.gambar}</div>
                    <div className='text-xs font-bold'>{val.nama}</div>
                </li>
            })
        }
        </div>
    </div>
  )
}

export default Story