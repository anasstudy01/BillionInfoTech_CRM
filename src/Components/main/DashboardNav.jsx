import React from 'react'

const DashboardNav = () => {
  return (
    <div className="bg-green-500 mx-5 rounded-t-3xl mt-2 py-6 text-white px-6 relative overflow-hidden ">
        <div className="flex justify-between items-center relative z-10">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav className="text-sm">
            <span className="opacity-80">Home</span>
            <span className="mx-2">&gt;</span>
            <span>Dashboard</span>
          </nav>
        </div>
      </div>
  )
}

export default DashboardNav;
