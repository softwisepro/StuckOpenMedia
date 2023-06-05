import React, { useState } from 'react'
import { MdOutlineLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LoginModel = ({ toggleModel, toggleRegisterModel, closeModel, closeDropdown }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault()

  }

  const handleCloseModel = (e) => {
    if (e.target.id === 'ModelContainer') {
      closeModel()
      setFormData({
        email: '',
        password: ''
      })
      closeDropdown()
    }
  }


  if (!toggleModel) return null;

  return (
    <div id='ModelContainer' onClick={handleCloseModel} className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-10 backdrop-blur-sm '>
      <div className='p-2 bg-white w-10/12 md:w-1/2 lg:w-1/3 shadow-inner border-e-emerald-600 rounded-lg py-10'>
        <div className='w-full p-3 justify-center items-center'>
          <h2 className='text-center text-xl font-semibold'>Stuck</h2>
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
            <span className={`absolute left-20 items-center ${email ? 'text-blue-400 bg-white transform -translate-x-2 -translate-y-5 text-xs px-1 z-20' : ''} input-text text-sm focused transition-all ease-linear duration-50`}>Email</span>
          </div>

          <div className='w-full px-16 relative flex items-center justify-between'>
            <input
              value={password}
              onChange={e => onChange(e)}
              type="password"
              name="password"
              id="password"
              required
              className='border-2 z-10 bg-transparent border-opacity-10 focus:outline-blue-400 h-10 text-sm w-full p-3 rounded-md'
            />
            <span className={`absolute left-20 items-center input-text text-sm focused transition-all ease-linear duration-50 ${password ? 'text-blue-400 bg-white transform -translate-x-2 -translate-y-5 text-xs px-1 z-20' : ''} input-text text-sm focused transition-all ease-linear duration-50`}>Password</span>
          </div>

          <div className='w-fulll flex justify-center items-center text-sm'>
            <Link
              to={'/forget_password'}
              className='text-blue-400 hover:underline underline-offset-2'
            >
              Forget Password
            </Link>
          </div>

          <div className='w-full px-16 relative flex items-center justify-center'>
            <button
              className=' flex space-x-2 justify-center w-1/2 font-bold items-center px-5 py-2 bg-blue-400 rounded-sm text-white hover:bg-blue-300 border-e-2 border-e-amber-400 border'
            ><span>LogIn</span><span><MdOutlineLogin fontSize={20} /></span></button>
          </div>
        </form>
        <div className='w-fulll flex justify-center items-center text-sm mt-5'>
          <p>Don't have an Account? go to SignUp</p>
        </div>
      </div>
    </div>
  )
}

export default LoginModel