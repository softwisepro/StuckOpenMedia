import React, { useState} from 'react'
import placeholder from '../assets/placeholders/placeholder-profile.png'
import { MdQuestionAnswer } from 'react-icons/md'
import { Link, useResolvedPath } from 'react-router-dom'
import placeholderPost from '../assets/placeholders/placeholder.png'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import AddAnswer from './AddAnswer'

const ReplyQuestion = () => {

  const [liked, setLiked] = useState(false)

  return (
    <>
      {/* Single Question and Other Replies or answers from other users */}

      <div className='w-full border-t md:px-2 py-5'>
        <div className='py-2 text-sm font-bold text-gray-500'>
          <h5>Answers And Replies</h5>
        </div>
        <div className='flex flex-cols-2'>

          <div className='p-2 h-full'>
            <div className='overflow-hidden top-0 border mx-auto w-12'>
              <img src={placeholder} alt='profile pic' />
            </div>
          </div>

          <div className='main-answer'>

            <div className='p-2 flex flex-col md:flex-row gap-1'>
              <Link to={'/user/jeck'} className='text-sm text-gray-600'>Eric Mwijage</Link>
              <Link to={'/user/jeck'} className='text-sm text-gray-600 hover:underline undeline-offset-10'>@Jayden</Link>
            </div>
            <div className='px-2'>
              <p>Wow thats a very nice question you know every person can try to think of it without getting an answere</p>
            </div>

            <div className='flex justify-between items-center mt-5 mb-2'>
              <div className='flex gap-5'>
                <span className='text-gray-500 flex space-x-1 justify-center items-center'>
                  { liked ? 
                    <AiFillLike
                      fontSize={20}
                      className={`cursor-pointer text-blue-500 ${liked ? 'scale-110 transition-all ease-linear duration-1000' : ''}`}
                      onClick={() => setLiked(!liked)}
                    /> : 
                    <AiOutlineLike
                      fontSize={20}
                      className={`cursor-pointer text-blue-500`}
                      onClick={() => setLiked(!liked)}
                    />
                  }
                  <span className='text-sm'>{liked ? 6 : 5}</span>
                </span>

                <span className='flex gap-1 font-light text-sm cursor-pointer'>
                  <span className='text-blue-500'><MdQuestionAnswer fontSize={20} /></span>
                  <span>0</span>
                </span>
              </div>

              <div className='flex gap-2 text-sm'>
                {/* <span className='text-gray-500'>Share</span> */}
                <span className='text-gray-500'>17hrs ago</span>
              </div>
              
            </div>

          </div>
        </div>
      </div>

      <div>
        <AddAnswer />
      </div>

    </>
  )
}

export default ReplyQuestion