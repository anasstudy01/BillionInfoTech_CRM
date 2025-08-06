import React from 'react'

const BonusCard = ({ icon, title, description, info, buttonText }) => {
  return (
    <div className="bonus-card bg-blue-200   shadow-md rounded-lg p-4">
      <div className="bonus-icon w-[60px]">{icon}</div>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
      <div className="bonus-info text-blue-400 ">{info}</div>
      <button className="claim-btn bg-blue-500 text-white py-1 px-4 rounded">{buttonText}</button>
    </div>
  )
}

export default BonusCard