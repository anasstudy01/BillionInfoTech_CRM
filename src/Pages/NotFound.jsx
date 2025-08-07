import React from 'react'

const NotFound = () => {
  return (
    <>
    <div className='flex w-full items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>404 - Not Found</h1>
        <p className='text-lg text-gray-600'>The page you are looking for does not exist.</p>
        <p className='text-lg text-gray-600'>Please check the URL or return to the homepage.</p>
      </div>
    </div>
    </>
  )
}

export default NotFound;