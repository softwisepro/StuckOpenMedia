import React, { useEffect, useState } from 'react'
import { MdInsights, MdOutlineHome, MdQuestionAnswer, MdTagFaces } from 'react-icons/md'
import { Link, useResolvedPath } from 'react-router-dom'

const NavLink = ({ to, label, icon, className = '' }) => {

  const router = useResolvedPath()

  return (
    <Link
      to={to}
      className={`px-8 flex space-x-2 py-2 font-bold w-full text-left text-sm ${className} ${router.pathname === to ? 'bg-slate-50 border-r border-blue-300' : 'border-none bg-transparent'}`}
    >
      <span className={`text-xl`}>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

const Sidebar = () => {
  const router = useResolvedPath()
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className={`w-full border-r h-full flex justify-center items-start py-5 pl-12 ${sticky ? 'sticky' : ''}`}>
      <div className='w-full'>
        <NavLink to={'/'} icon={<MdOutlineHome />} label={'Home'} />
        <NavLink to={'/popular'} icon={<MdInsights />} label={'Popular'} />
        <NavLink to={'/questions'} icon={<MdQuestionAnswer />} label={'Questions'} className={`!border-blue-300 ${router.pathname === '/questions/answer' ? '!bg-slate-50 !border-r' : ''}`} />
        <NavLink to={'/tags'} icon={<MdTagFaces />} label={'Tags'} />

      </div>
    </div>
  )
}

export default Sidebar