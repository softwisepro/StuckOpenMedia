import React, {useState} from 'react';
import { MdSend } from 'react-icons/md'

const AddAnswer = () => {

  const [formData, setFormData] = useState({
    answer: ''
  });

  const { answer } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // data to api


    setFormData({
      answer: ''
    })
  }


  return (
    <div className='flex w-full mb-5 flex-col gap-2 bg-white'>

      <div className='w-full bg-white border-t py-3 overflow-hidden'>
      
        <div className='w-full flex flex-cols-2'>
          <div className='w-[20] hidden p-2 h-full'></div>
          
          <form onSubmit={e => onSubmit(e)} className='w-full flex flex-row gap-2'>

            <textarea
              value={answer}
              name={'answer'}
              onChange={e => onChange(e)}
              placeholder={'Comment here....'}
              className='border  w-full outline-none rouded-md resize-none py-2 text-gray-500 text-sm px-5'
            ></textarea>

            <div className='flex p-1 justify-end items-center'>
              <button
                className='bg-blue-300 shadow-lg p-3 rounded-full md:rounded text-blue-900 flex justify-center items-center hover:bg-blue-400 transition-all ease-linear duration-75'
              >
                <span className='hidden'>Answer</span>
                <span className='text-white'><MdSend fontSize={20} /></span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAnswer