import React from 'react'
import Card from '../components/Metro/Card'

function Metro() {
  return (
    <div>
      <div className='w-full grid grid-cols-2 border-b border-gray-300 pb-4'>
        <div className='w-fit h-fit'>
          <p className='text-base'>Application / <span className="text-blue-500 font-semibold">Metro</span></p>
          <p className='text-xs'>Last update : <span className="font-semibold">Sunday, 11 September 2023</span></p>
        </div>
      </div>

      <Card />
    </div>
  )
}

export default Metro
