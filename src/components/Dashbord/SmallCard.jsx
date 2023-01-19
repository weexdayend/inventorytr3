import React from 'react'
import DynamicHeroIcon from '../../components/HeroIcon'

function SmallCard() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4 mt-8">

      <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-3xl shadow-lg">
      <div className="w-full px-6 py-5 bg-white rounded-2xl shadow-md">
      <p className='text-xl pb-2 font-semibold'>GPON</p>
        <div className='grid grid-cols-2'>
          <div className='w-full'>
            <div className="text-3xl font-medium text-green-500 truncate">
              548
            </div>
            <div className="text-xs font-semibold text-green-500">
              NODE UP
            </div>
          </div>
          <div className='animate-pulse w-full'>
            <div className="text-3xl font-medium text-red-500 truncate">
              2
            </div>
            <div className="text-xs font-semibold text-red-500">
              NODE DOWN
            </div>
          </div>
        </div>
      </div>
        <div className='flex items-center space-x-1 px-4 py-3 justify-center'>
          <DynamicHeroIcon icon={'ExclamationIcon'} color={'text-white'} size={'h-4 w-4'} />
          <p className='text-xs text-white'><span className='text-white font-semibold'>2 NODE DOWN</span> dari 550 NODE</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl shadow-lg">
      <div className="w-full px-6 py-5 bg-white rounded-2xl shadow-md">
      <p className='text-xl pb-2 font-semibold'>METRO</p>
        <div className='grid grid-cols-2'>
          <div className='w-full'>
            <div className="text-3xl font-medium text-green-500 truncate">
              123
            </div>
            <div className="text-xs font-semibold text-green-500">
              NODE UP
            </div>
          </div>
          <div className='w-full'>
            <div className="text-3xl font-medium text-gray-300 truncate">
              0
            </div>
            <div className="text-xs font-semibold text-gray-300">
              NODE DOWN
            </div>
          </div>
        </div>
      </div>
        <div className='flex items-center space-x-1 px-4 py-3 justify-center'>
          <DynamicHeroIcon icon={'CloudUploadIcon'} color={'text-white'}  size={'h-4 w-4'} />
          <p className='text-xs text-white'><span className='text-white font-semibold'>123 NODE UP</span> dari 123 NODE</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-lg">
        <div className="w-full px-6 py-5 bg-white rounded-2xl shadow-md">
        <p className='text-xl pb-2 font-semibold'>DWDM</p>
          <div className='grid grid-cols-2'>
            <div className='w-full'>
              <div className="text-3xl font-medium text-gray-500 truncate">
                55
              </div>
              <div className="text-xs font-semibold text-gray-500">
                NODE
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex items-center space-x-1 px-4 py-3 justify-center'>
          <DynamicHeroIcon icon={'ShieldCheckIcon'} color={'text-white'} size={'h-4 w-4'} />
          <p className='text-xs'><span className='text-white font-semibold'>Source Database RNO TR3</span></p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-lg">
        <div className="w-full px-6 py-5 bg-white rounded-2xl shadow-md">
        <p className='text-xl pb-2 font-semibold'>ONT</p>
          <div className='grid grid-cols-2'>
            <div className='w-full'>
              <div className="text-3xl font-medium text-gray-500 truncate">
                65
              </div>
              <div className="text-xs font-semibold text-gray-500">
                NODE
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex items-center space-x-1 px-4 py-3 justify-center'>
          <DynamicHeroIcon icon={'ShieldCheckIcon'} color={'text-white'} size={'h-4 w-4'} />
          <p className='text-xs'><span className='text-white font-semibold'>Source Database RNO TR3</span></p>
        </div>
      </div>

    </div>
  )
}

export default SmallCard
