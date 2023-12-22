import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div>
        <h1 className='text-center text-red-600 font-bold p-3 uppercase -mt-4'>{mensaje}</h1>
    </div>
  )
}

export default Error