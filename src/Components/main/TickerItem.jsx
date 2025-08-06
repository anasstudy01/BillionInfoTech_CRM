import React from 'react'

const TickerItem = ({ icon, symbol, price, change, iconColor, priceColor, changeColor }) => (
  <div className="flex items-center space-x-2 mr-8">
    <span className={iconColor}>{icon}</span>
    <span className="font-medium">{symbol}</span>
    <span className={priceColor}>{price}</span>
    <span className={changeColor}>{change}</span>
  </div>
);

export default TickerItem
