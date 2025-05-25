import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center pt-24 pb-10 px-5'>
      <h1 className='text-3xl md:text-6xl font-extrabold font-inter '>404</h1>
      <p className='text-base md:text-2xl'>Page Not Found</p>
      <Link href="/" className="bg-green-500 text-white font-bold py-3 px-5 rounded-lg font-inter mt-5">Go Back Home</Link>
    </div>
  )
}

export default NotFound
