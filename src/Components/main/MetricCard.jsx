import React from 'react'

const MetricCard = ({ icon, title, value, iconColor = "text-green-500" }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center mb-2">
          <span className={`${iconColor} text-xl mr-2`}>{icon}</span>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        </div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="text-gray-400">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      </div>
    </div>
  </div>
)

export default MetricCard