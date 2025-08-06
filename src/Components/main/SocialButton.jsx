import React from 'react'

const SocialButton = ({ children }) => (
  <button className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
    <span className="text-lg font-bold">{children}</span>
  </button>
)

export default SocialButton