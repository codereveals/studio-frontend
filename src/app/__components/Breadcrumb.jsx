import React from 'react'

const Breadcrumb = ({title, desc}) => {
  return (
    <div className='w-full min-h-[200px] flex justify-center flex-col items-center bg-[#2C2134]'>
        <h1 className='text-6xl text-white'>{title}</h1>
        <p className='text-white py-3'>{desc}</p>
    </div>
  )
}

export default Breadcrumb