import React from 'react'
import { Link, useLocation, use, useMatches } from 'react-router-dom'

import DynamicHeroIcon from './HeroIcon'

const menuData = [
  { name: 'Dashboard', link: '/dashboard', icon: 'HomeIcon', active: false },
  { name: 'Akses', link: '/akses', icon: 'BriefcaseIcon', active: false },
  { name: 'Metro', link: '/metro', icon: 'ServerIcon', active: false },
  { name: 'Potensi Perangkat', link: '/potensi-perangkat', icon: 'CollectionIcon', active: false },
]

function Sidebar() {

  let location = useLocation()

  return (
    <div
      className={`w-72 flex flex-col h-screen py-8 pl-4`}
    >
      <div className="space-y-3">
        <div className="mb-12 p-3 mt-6">
          <h2 className="text-3xl text-white">BlueWhale</h2>
          <h2 className="text-xs text-gray-300">INVENTORY TELKOM REGIONAL 3</h2>
        </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-2">
              {
                menuData.map((item, key) => (
                  <li    
                    key={key}
                    className={`w-full rounded-l-full ${item.active ? 'bg-blue-50 shadow-md' : ''} px-3 py-1`}
                  >
                    <Link
                      to={item.link}
                      className="flex items-center p-2 space-x-2 rounded-md"
                    >
                      <DynamicHeroIcon icon={item.icon} color={`${location.pathname === item.link ? 'text-blue-500' : 'text-white'}`} size={'h-6 w-6'} />
                      <span className={`text-md ${location.pathname === item.link ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500' : 'text-white'} font-semibold`}>{item.name}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
