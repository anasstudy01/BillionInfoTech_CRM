import React from 'react'
import { tickerData } from '../../data/data'
import TickerItem from './TickerItem'
import swg from '../../assets/rss.png'

const MovingDisplay = () => {
  return (
    <div 
className="bg-gray-50  overflow-x-hidden rounded-lg shadow-md my-5 mx-5 p-1 flex  justify-center items-center" >
<div><img src={swg} width={80}></img></div>
    <div className="bg-gray-900 text-white p-3 overflow-hidden relative my-5 mx-5 ">
        <div className="flex items-center space-x-8 animate-scroll whitespace-nowrap">
          {tickerData.map((item, index) => (
              <TickerItem key={index} {...item} />
          ))}
        </div>
      </div>
              </div>

  )
}

export default MovingDisplay