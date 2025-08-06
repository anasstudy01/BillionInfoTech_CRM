import React from 'react'

const PartnerLink = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Partner Link</h3>
              <div className="flex items-center space-x-4">
                <input 
                  type="text" 
                  value="this is link" 
                  readOnly
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 text-sm"
                />
                <button className="p-3 text-blue-500 hover:bg-blue-50 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </button>
              </div>
            </div>
            
          </div>
        </div>
  )
}

export default PartnerLink