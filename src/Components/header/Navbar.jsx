import React from 'react'
import logo from '../../assets/nav-logo.png'

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
      {/* Left side - Menu button */}
      <div className="flex items-center">
        <button 
          className="inline-flex items-center justify-center w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200" 
          onClick={(e) => {
            console.log('Menu button clicked!', e)
            toggleSidebar()
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Center - Logo */}
      <div className="flex-1 flex justify-center md:justify-start md:ml-4">
        <img src={logo} alt='CRM Clone Logo' className='h-10 w-auto' />
      </div>

      {/* Right side - Toggle and Icons */}
      <div className="flex items-center space-x-4">
        {/* Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
        </label>

        {/* Notification Bell */}
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md relative transition-colors duration-200">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Icon */}
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar