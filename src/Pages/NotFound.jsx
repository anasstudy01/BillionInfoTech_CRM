import React from 'react'
import NotFoundImage from '../assets/NotFound.jpg';
import { Link } from 'react-router';
const NotFound = () => {
  return (
    <>
    <div className='flex w-full items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center shadow-lg p-8 bg-white rounded-lg'>
        <h1 className='text-4xl font-bold'>404 - Not Found</h1>
        <p className='text-lg text-gray-600'>The page you are looking for does not exist.</p>
        <p className='text-lg text-gray-400'>Please check the URL or return to the homepage by clicking here <Link to="/" className='text-blue-500 hover:underline'>go back to home page</Link>.</p>
        <img src={NotFoundImage} alt="Not Found" className='mt-4 w-100 mx-auto' />
      </div>
    </div>
    </>
  )
}

export default NotFound;