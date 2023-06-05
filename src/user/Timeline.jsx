import React from 'react';
import { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PostCard from '../post/PostCard';
import placeholder from '../assets/placeholders/placeholder-profile.png';
import { MdOutlineStarRate, MdStar } from 'react-icons/md';
import Rate from '../components/Rate'
import AddAnswer from '../components/AddAnswer'
import ReplyQuestion from '../components/ReplyQuestion'

const Timeline = () => {

  const [rate, setRate] = useState(false);
  
  const [viewReplies, setViewReplies] = useState(false)

  const handleOpenReplies = (e) => {
    setViewReplies(!viewReplies)
  }

  return (
    <div>
      <div className='h-full'>
      <div className='flex flex-col lg:flex-row space-x-5'>
        <div className='md:w-[100%] p-5 flex flex-col'>
            <div className='inline-block md:flex justify-center md:justify-start gap-5 items-center my-5'>
              <div className=' h-full mb-5 md:mb-0'>
                <div className='w-40 md:w-20 mx-auto top-0'>
                  <img src={placeholder} />
                </div>
              </div>
              <div className='gap-2 md:gap-1 flex flex-col h-full justify-center'>
                <div className='flex top-0 flex-col md:flex-row justify-center md:justify-start items-center gap-1 text-sm md:text-xl'>
                  <Link to={'/user/jeck'} className='text-3xl md:text-sm font-bold'>Jackson Kweyunga</Link>
                  <Link to={'/user/jeck'} className='text-xs'>@jeckProgramer</Link>
                </div>
                <div className='flex justify-center md:justify-start items-center text-sm md:text-xl'>
                  <p className='!text-sm max-w-sm text-center md:text-start'>
                    Expore the most asked Questions from our Questions Hub Expore the most asked Questions from our
                  </p>
                </div>
              </div>
            </div>
          <div className='w-full flex justify-end items-center'>

            <span
            className='text-3xl flex justify-center gap-2 items-center'
            onClick={() => setRate(!rate)}
          >
            { !rate ? <p className='!text-sm'>Star</p> : <p className='!text-sm'>Stared</p>}
            {rate ? (<MdStar className='text-yellow-400' />) : (< MdOutlineStarRate className='text-yellow-400'/>)}
          </span>
          </div>

          <div className='w-full flex flex-col mt-5 justify-center items-center'>
            <div>
              <PostCard openReplies={handleOpenReplies} />
            </div>

            {viewReplies && (
              <div className='ml-8 md:ml-14'>
                <ReplyQuestion />
              </div>
            )}
          </div>
        </div>
        <div className='p-5 w-[50%] h-full'></div>
      </div>
    </div>
    </div>
  )
}

export default Timeline