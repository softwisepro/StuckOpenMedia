import React, { useState} from 'react'
import placeholder from '../assets/placeholders/placeholder-profile.png'
import { MdQuestionAnswer } from 'react-icons/md'
import { Link, useResolvedPath } from 'react-router-dom'
import placeholderPost from '../assets/placeholders/placeholder.png'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import ReplyQuestion from '../components/ReplyQuestion'


const PostCard = ({ openReplies }) => {

  const router = useResolvedPath();

  const [liked, setLiked] = useState(false);

  const [viewReplies, setViewReplies] = useState(false)

  const handleOpenReplies = (e) => { 
    openReplies()
  }


  return (
    <div className='w-full flex flex-col gap-2 bg-white'>

      <div className='w-full bg-white border-t py-3 h- max-h-auto overflow-hidden'>
      
        <div className='w-full h-full flex flex-cols-2'>
          <div className='p-2 h-full'>

            <div className='overflow-hidden top-0 border mx-auto w-12'>
              <img src={placeholder} alt='profile pic' />
            </div>

          </div>
          <div className=' flex flex-col'>
            <div className='p-2 flex flex-col md:flex-row gap-1'>
              <Link to={'/user/jeck'} className='text-sm text-gray-600'>Jackson Kweyunga</Link>
              <Link to={'/user/jeck'} className='text-sm text-gray-600 hover:underline undeline-offset-10'>@jeckProgramer</Link>
            </div>
            <div className='px-2'>
              <div>
                What is the main aim of working for Artificial interigence in this world while we know their negative outcomes....
              </div>
            </div>
            <div className='px-2 my-5 flex gap-2 justify-between items-center'>
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

                  <span className='text-sm'>{liked ? 21 : 20}</span>
                </span>

                { router.pathname === '/questions/answer' ?  <span className='flex gap-1 font-light text-sm cursor-pointer text-blue-500'onClick={e => handleOpenReplies(e)} ><span><MdQuestionAnswer fontSize={20} /></span><span>1</span></span> : <span className='flex gap-1 font-light text-sm cursor-pointer text-blue-500' onClick={e => setViewReplies(!viewReplies)} ><span><MdQuestionAnswer fontSize={20} /></span><span>1</span></span>}

              </div>

              <div className='flex gap-2 text-sm'>
                {/* <span className='text-gray-500'>Share</span> */}
                <span className='text-gray-500'>17hrs ago</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      {viewReplies && (
        <div className='ml-8 md:ml-14'>
          <ReplyQuestion />
        </div>
      )}
    </div>
  )
}

export default PostCard