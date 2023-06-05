import React, { useState, useEffect } from 'react'
import { MdAddCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CreatePostModel from '../../post/CreatePostModel'
import PostCard from '../../post/PostCard'
import PrimaryBtn from '../../components/buttons/PrimaryBtn'

const Questions = () => {
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
    <div>
      <div className='h-full'>
      <div className='flex flex-col lg:flex-row space-x-5'>
        <div className='md:w-[100%] p-5 flex flex-col'>
            <div className='font-bold text-3xl text-center my-5'>
              <h1>Stuck Questions Hub...</h1>
              <p className='!text-sm'>A special hub where you can ask a question to the worl and get instante answers</p>
            </div>
          <div className='w-full flex justify-end items-center'>
            <PrimaryBtn onClick={() => setOpenCreatePostModel(true)} label={'Whats on your Mind'} />
          </div>

          <div className='w-full flex flex-col mt-5 justify-center items-center'>
            <PostCard />
          </div>

        </div>

        <div className='p-5 w-[50%] h-full'></div>

      </div>
    </div>
    <CreatePostModel
        closeModel={handleCloseCreatePostModel}
        toggleModel={openCreatePostModel}
      />
    </div>
  )
}

export default Questions