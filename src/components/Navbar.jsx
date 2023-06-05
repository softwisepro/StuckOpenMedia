import React, { useEffect, useRef, useState } from 'react'
import { MdAppRegistration, MdLogin, MdOutlineArrowDropDown, MdMenu, MdOutlinePeople, MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom';
import LoginModel from '../auth/LoginModel';
import RegisterModel from '../auth/RegisterModel';
import SearchBar from './SearchBar';

const Navbar = () => {
  
  const [openLoginModel, setOpenLoginModel] = useState(false);
  const [openRegisterModel, setOpenRegisterModel] = useState(false);


  const handleCloseLoginModel = () => setOpenLoginModel(false);
  const handleCloseRegisterModel = () => setOpenRegisterModel(false);

  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleCloseDropdown = (e) => {
    setToggleDropDown(false)
  }

  
  return (
    <div id='main' className='z-10 w-full fixed border-b flex flex-cols-3 justify-between bg-white'>
      
      <div className='md:w-[25%] px-3 p-2 flex justify-start items-center'>
        <div className='flex justify-center items-center'>
          {/* <img  src={Logo} /> */}
          <Link to='/' className='font-semibold text-xl md:pl-10'>Stuck</Link>
        </div >
      </div>
      <div className='hidden md:flex md:w-[50%] p-2 justify-start items-center'>
        <nav className='text-sm font-light flex gap-2 mr-5'>
          <Link to='/'>Explore</Link>
        </nav>
        <SearchBar />
      </div>
      <div className=' md:w-[25%] flex justify-end px-5 items-center'>

        <div className='mr-3 md:hidden py-2'>
          {/* <span><MdSearch fontSize={20} /></span> */}
          <SearchBar />
        </div>

        <div className='hidden lg:flex justify-center items-center gap-2'>
          
          <Link
            onClick={() => setOpenLoginModel(true)}
            className='bg-blue-300 flex space-x-1 px-2 py-[0.4rem] rounded-sm text-blue-600 text-sm border border-e-amber-400 border-blue-300 hover:bg-blue-100 hover:-translate-y-[2px] transition-all ease-linear duration-300'
          ><span>Login</span> <MdLogin fontSize={20} /></Link>
          <Link
            onClick={() => setOpenRegisterModel(true)}
            className='bg-blue-500 px-2 flex space-x-1 py-[0.4rem] rounded hover:-translate-y-[2px] text-white text-sm border border-e-amber-400 drop-shadow-md hover:bg-blue-500 transition-all ease-linear duration-300'
          ><span>SignUp</span> <MdAppRegistration fontSize={20} /> </Link>
        </div>
        <div className='relative flex lg:hidden justify-end items-end'>
          <button
            onClick={() => !toggleDropDown ? setToggleDropDown(true) : setToggleDropDown(false)}
            className='flex justify-between items-center gap-1 border rounded overflow-hidden transition-all ease-linear duration-300'
          >
            <span className='border-r py-1 px-1 bg-slate-50 w-10/12'><MdOutlinePeople fontSize={20} /></span>
            <span className={`pr-[0.2rem]`}><MdOutlineArrowDropDown className={`${!toggleDropDown ? 'transition-all duration-300 ease-linear' : 'transition-all duration-300 ease-linear rotate-180'}`} /></span>

          </button>
          {toggleDropDown && (
            <div className='absolute bg-slate-50 transform translate-y-20 shadow-md rounded-md py-1'>
              <div className='flex flex-col'>
                <Link
                  onClick={() => setOpenLoginModel(true)}
                  className='flex gap-2 justify-center items-center py-1 px-3 hover:bg-blue-50 overflow-hidden border-b'
                >
                  <span>LogIn</span>
                  <span><MdLogin fontSize={20} /></span>
                </Link>
                <Link
                  onClick={() => setOpenRegisterModel(true)}
                  className='flex gap-2 justify-center items-center py-1 px-3 hover:bg-blue-50 overflow-hidden'
                >
                  <span>SignUp</span>
                  <span><MdAppRegistration fontSize={20} /></span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <LoginModel
        closeModel={handleCloseLoginModel}
        closeDropdown={handleCloseDropdown}
        toggleModel={openLoginModel}
      />
      <RegisterModel
        closeModel={handleCloseRegisterModel}
        closeDropdown={handleCloseDropdown}
        toggleModel={openRegisterModel}
      />
    </div>
  )
}

export default Navbar