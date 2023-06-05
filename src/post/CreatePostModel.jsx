import React, { useState } from 'react'
import { MdPermMedia, MdPublish, MdSave, MdVideoLibrary } from 'react-icons/md';
import placeholder from '../assets/placeholders/placeholder-profile.png';

const CreatePostModel = ({ toggleModel, closeModel }) => {

  const [formData, setFormData] = useState({
    content: '',
    media: ''
  });


  const { content, media } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault()

    setFormData({
      content: '',
      // media: ,
    })
  }

  const handleCloseModel = (e) => {
    if (e.target.id === 'ModelContainer') {
      closeModel()
      setFormData({
        content: '',
        // media: ,
      })
    }
  }


  if (!toggleModel) return null;

  return (
    <div id='ModelContainer' onClick={handleCloseModel} className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-10 backdrop-blur-sm '>
      <div className='bg-white w-10/12 md:w-1/2 shadow-inner border-e-emerald-600 rounded-lg py-10'>
        <form onSubmit={e => onSubmit(e)} className='flex flex-col gap-3'>

          <div className='w-full px-8 md:px-16 relative flex space-x-2 items-center justify-between'>

            <div className='flex justify-center items-center overflow-hidden border w-12 h-12'>
              <img src={placeholder} alt='Profile_IMG' className='w-full h-auto' />
            </div>
            <div className='flex space-x-1'>
              <button
                id='save'
                className='flex space-x-1 text-xs text-white p-2 bg-orange-400 rounded-full'
              >
                <span><MdSave fontSize={20} /></span>
              </button>

              <button
                id='publish_btn'
                className='flex space-x-1 text-xs text-white p-2 bg-orange-400 rounded-full'
              >
                <span><MdPublish fontSize={20} /></span>
              </button>
            </div>

          </div>

          <div className='w-full px-8 lg:px-14 relative flex items-center justify-between'>
            <label className='relative w-full flex'>
              <textarea
                value={content}
                onChange={e => onChange(e)}
                name="content"
                placeholder='Write something here...'
                cols={20}
                required
                className={`border-2 pb-10 resize-none bg-transparent border-opacity-5 h-[300px] outline-none text-sm w-full p-3 rounded`}
              >
              </textarea>
              <div className=' absolute pr-5 bottom-5 flex right-0'>
                <label className="fileContainer">
                  <MdPermMedia fontSize={20} className=' cursor-pointer' />
                  <input
                    type="file"
                    // value={media}
                    onChange={e => onChange(e)}
                    name="media"
                    className='w-20 bg-black '
                  />
                </label>
              </div>
            </label>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreatePostModel