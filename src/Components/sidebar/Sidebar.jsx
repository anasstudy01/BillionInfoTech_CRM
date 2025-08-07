import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from './sidebarMenuData';

const Sidebar = ({ isOpen = true}) => {
  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <div className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ease-in-out ${
      isOpen ? 'w-64' : 'w-0 overflow-hidden'
    }`}>

      {/* Sidebar Header */}
      <div className={`w-64 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">HOME</h3>
        </div>

        {/* Sidebar Menu Items */}
        <ul className="py-2">
          {menuData.map((menu, index) => (
            <li key={index}>
              {/* Check if the menu has a sub-menu */}
              {menu.subMenu ? (
                <>
                  <div
                    onClick={() => toggleMenu(menu.title)}
                    className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-colors duration-200 ${
                      openMenu === menu.title 
                        ? 'bg-green-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{menu.icon}</span>
                      <span>{menu.title}</span>
                    </div>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMenu === menu.title ? 'transform rotate-90' : ''
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  {openMenu === menu.title && (
                    <ul className="bg-gray-50 border-l-2 border-gray-200">
                      {menu.subMenu.map((sub, i) => (
                        <li key={i}>
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              `block py-2 px-8 text-sm transition-colors duration-200 ${
                                isActive 
                                  ? 'text-green-600 bg-green-50 border-l-2 border-green-500' 
                                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                              }`
                            }
                          >
                            {sub.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-sm transition-colors duration-200 ${
                      isActive 
                        ? 'bg-green-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  <span className="text-lg mr-3">{menu.icon}</span>
                  <span>{menu.title}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;