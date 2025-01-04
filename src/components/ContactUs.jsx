import React from 'react'
import Button from './Button'

const ContactUs = () => {
  return (
    <div className='min-h-screen w-full bg-[#FFDFCB] flex justify-center items-center'>
        <div className='relative h-[80vh] w-[65vw] flex flex-wrap items-center justify-center'>
            <div className='absolute left-[15%] z-[100] h-[50vh] w-[25vw] bg-[#D70606] flex items-center justify-center'>
                <div className='h-[45vh] w-[90%]'>
                    <h1 className='font-semibold p-1 text-white text-[1.6em]'>Contact Us</h1>
                    <div className='h-[9vh] w-[30vh] p-5 mx-3 my-2 flex justify-between items-center'>
                        <i className="ri-map-pin-2-line text-white text-[1.8em]"></i>
                        <p className='text-white transition duration-300 ease-in-ease-out hover:scale-110 hover:underline'>H-63, Suite-163<br/>
                            Noida-63A<br/>
                            Uttar Pradesh
                        </p>
                    </div>
                    <div className='h-[9vh] w-[28vh] p-5 mx-3 my-2 flex justify-between items-center'>
                        <i className="ri-smartphone-line text-white text-[1.8em]"></i>
                        <p className='text-white transition duration-300 ease-in-ease-out hover:scale-110 hover:underline'>+9192929256</p>
                    </div>
                    <div className='h-[9vh] w-[31vh] p-5 mx-3 my-2 flex justify-between items-center'>
                        <i className="ri-mail-open-line text-white text-[1.8em]"></i>
                        <p className='text-white transition duration-300 ease-in-ease-out hover:scale-110 hover:underline'>hello@gmail.com</p>
                    </div>
                    <div className='h-[9vh] w-[28vh] p-5 mx-3 my-2 flex justify-between items-center'>
                        <i className="ri-phone-line text-white text-[1.8em]"></i>
                        <p className='text-white transition duration-300 ease-in-ease-out hover:scale-110 hover:underline'>+9192929256</p>
                    </div>
                </div> 
            </div>
            <div className='absolute right-[0] h-full w-[40vw] bg-[#FFFFFF] flex justify-end'>
                <div className='h-full w-[70%] overflow-hidden'>
                    <h1 className='text-[2.5em] font-semibold mt-5 ml-2'>Get in Touch</h1>
                    <p className='text-[0.9em] text-[#000000] opacity-50 ml-2'>Feel free to drop a line about us</p>
                    <form>
                        <input type='text' placeholder='Name' className='h-[7vh] w-[95%] p-7 mt-10 text-[1em] border-[2px] outline-none bg-[#f8f8f8] border-[#000] border-opacity-[0.25] shadow-zinc-300 rounded-lg'/>
                        <input type='email' placeholder='Email' className='h-[7vh] w-[95%] p-7 mt-10 text-[1em] border-[2px] outline-none bg-[#f8f8f8] border-[#000] border-opacity-[0.25] shadow-zinc-300 rounded-lg'/>
                        <textarea placeholder='About Us' className='h-[18vh] w-[95%] p-7 mt-10 text-[1em] border-[2px] outline-none bg-[#f8f8f8] border-[#000] border-opacity-[0.25] shadow-zinc-300 rounded-lg'/>
                    </form>
                    <Button text={Submit}/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ContactUs