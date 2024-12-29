import React from 'react'

const Button = ({text}) => {
  return (
    <div className='w-[7vw] mt-5 py-[5px] rounded-[20px] text-[1em] text-center bg-[#D70606] hover:bg-white hover:text-[#D70606] hover:border-[#D70606] hover:border-2 hover text-white font-semibold'>
        <h1>{text}</h1>
    </div>
  )
}

export default Button