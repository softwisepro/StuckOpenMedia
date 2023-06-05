import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Downbar from '../components/Downbar'
import { MdMenu } from 'react-icons/md'


const Layout = ({ children }) => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])



  return (

    <Fragment>
      <div className='md:flex-row flex-col transition-all ease-out duration-75'>
        <div className='flex flex-initial'>
          <Navbar/>
        </div>
        
        <div className=' w-full flex flex-row'>
          <div className='hidden md:flex flex-initial mt-[3.2rem]'>
            <Sidebar />
          </div>
          
          <div className='main-container h-[92vh] w-full mt-[3.1rem]'>
            { children }
          </div>
        </div>
        <div className='md:hidden absolute left-0 flex z-10 bottom-0'>
          <Downbar />
        </div>
      </div>
    </Fragment>
  )
}

export default Layout