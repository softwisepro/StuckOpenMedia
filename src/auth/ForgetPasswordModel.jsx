import React, { useState } from 'react'
import { MdArrowBack, MdBackHand, MdOutlineLockReset, MdOutlineLogin, MdWarningAmber } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ForgetPasswordModel = () => {

  const [formData, setFormData] = useState({
    email: ''
  });


  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault()

  }

  return (
    <div id='ModelContainer' className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-10 backdrop-blur-sm'>
      <div className='p-2 py-10 bg-white w-10/12 md:w-1/2 lg:w-1/3 shadow-inner border-e-emerald-600 rounded-lg'>
        <div className='w-full p-3 flex flex-col justify-center items-center'>
          <h2 className='text-center text-xl font-semibold'>Stuck</h2>
          <p className='font-semibold text-sm'>Password Reset Confirmation</p>
        </div>
        <div className='w-fulll flex gap-2 justify-center items-center text-xs p-2'>
          <MdWarningAmber fontSize={20} color='blue' />
          <p>Reset your password using your Email Address</p>
        </div>
        <form onSubmit={e => onSubmit(e)} className='flex flex-col gap-3'>

          <div className='w-full px-16 relative flex items-center justify-between'>
            <input
              value={email}
              onChange={e => onChange(e)}
              type="text"
              name="email"
              id="email"
              required
              className={`border-2 z-10 bg-transparent border-opacity-10 focus:outline-blue-400 h-10 text-sm w-full p-3 rounded-md`}
            />
            <span className={`absolute left-20 items-center ${email ? 'text-blue-400 bg-white transform -translate-x-2 -translate-y-5 text-xs px-1 z-20' : ''} input-text text-sm focused transition-all ease-linear duration-50`}>Verified Email Address For your Account </span>
          </div>

          {/* <div className='w-fulll flex justify-center items-center text-sm'>
            <Link className='text-blue-400 hover:underline underline-offset-2'>Read More about <i>Forget Password</i></Link>
          </div> */}

          <div className='w-full px-16 relative flex items-center justify-center'>
            <button
              className=' flex space-x-2 justify-center w-4/6 font-bold items-center px-5 py-2 bg-blue-400 rounded-sm text-white hover:bg-blue-300 border-e-2 border-e-amber-400 border'
            ><span>Forget Password</span><span><MdOutlineLockReset fontSize={20} /></span></button>
          </div>
        </form>
        <Link to={'/'} className='w-fulll flex gap-2 justify-center items-center text-xs p-2 mt-2'>
          <MdArrowBack fontSize={20} className='text-blue-400' />
          <p>Go Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ForgetPasswordModel