import React from 'react'

// import TickerItem from './TickerItem'
import swg from '../../assets/rss.png'
import TickerDisplay from './TickerDisplay'

const MovingDisplay = () => {
  return (
    <>
      <div className='flex  items-center py-3 mx-5 shadow-lg rounded-lg'>
        <div className='flex-shrink-0 px-3'>
          <img src={swg} width={40} alt="RSS Icon" />
        </div>
        <div className='flex-1 overflow-hidden'>
          <TickerDisplay />
        </div>
      </div>
    </>
  )
}

export default MovingDisplay