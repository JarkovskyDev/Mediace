import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Contacts = () => {
  return (
    <div name='contacts' className='w-full min-h-screen flex flex-col justify-between items-center'>
      <div className='max-w-[1400px] m-auto border-solid border border-gray-700 shadow-lg p-4 px-4 sm:pt-0 sm:pb-0'>
        <h1>Tel.: <a href="tel:+420606651591">+420 606651591</a></h1>
        <h1>Email: <a href="mailto:stavebni-mediace@seznam.cz">stavebni-mediace@seznam.cz</a></h1>
      </div>
      <div className='max-w-[1400px] flex items-center mt-4'> 
        <AiOutlineCopyrightCircle className='text-lg mr-2' />
        <p>MEDIACE</p>
      </div>
    </div>
  )
}

export default Contacts