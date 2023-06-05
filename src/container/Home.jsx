import React, { useState, useEffect } from 'react'
import { MdAddCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CreatePostModel from '../post/CreatePostModel'
import PostCard from '../post/PostCard'
import PrimaryBtn from '../components/buttons/PrimaryBtn'

const Home = () => {

  const [openCreatePostModel, setOpenCreatePostModel] = useState(false);

  const handleCloseCreatePostModel = () => setOpenCreatePostModel(false);

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <div className='h-full'>
      <div className='flex flex-col lg:flex-row space-x-5'>
        <div className='md:w-[100%] p-5 flex flex-col'>
          <div className='w-full flex justify-end'>
            <PrimaryBtn onClick={() => setOpenCreatePostModel(true)} label={'Whats on your Mind'} />
          </div>

          <div className='w-full flex flex-col mt-5 justify-center items-center'>
            <PostCard />
          </div>

        </div>

        <div className='p-5 w-[50%] h-full'>

        </div>
      </div>
      <CreatePostModel
        closeModel={handleCloseCreatePostModel}
        toggleModel={openCreatePostModel}
      />
    </div>
  )
}

export default Home