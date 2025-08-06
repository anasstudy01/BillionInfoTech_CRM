import React from 'react'

const BonusCard = ({ icon, title, description, info, buttonText }) => {
  return (
    <div className="bonus-card bg-white px-8 py-10 text-center shadow-md rounded-lg space-y-2">
      <div className="bonus-icon  mx-auto text-4xl">{icon}</div>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
      <div className="bonus-info text-blue-400">{info}</div>
      <button className="claim-btn bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">{buttonText}</button>
    </div>
  )
}

export default BonusCard