import React, { useState } from 'react';
import { MdOutlineStarRate, MdStar } from 'react-icons/md';

const Rate = () => {

  const [rate1, setRate1] = useState(false);
  const [rate2, setRate2] = useState(false);
  const [rate3, setRate3] = useState(false);
  const [rate4, setRate4] = useState(false);
  const [rate5, setRate5] = useState(false);


  return (
    <>
      <div className='ml-3'>

        <h4>Rate Jackson Kweyunga</h4>
        <div className='flex gap-1'>

          <span
            className='text-xl'
            onClick={() => setRate1(!rate1) === setRate2(false) === setRate3(false) === setRate4(false) === setRate5(false)}
          >
            {rate1 ? (<MdStar className='text-yellow-400' />) : (< MdOutlineStarRate className='text-yellow-400'/>)}
          </span>

          <span
            className='text-xl'
            onClick={() => rate1 ? setRate2(!rate2) === setRate3(false) === setRate4(false) === setRate5(false) : setRate2(false)}
          >
            {rate2 ? (<MdStar className='text-yellow-400' />) : (< MdOutlineStarRate className='text-yellow-400'/>)}
          </span>

          <span
            className='text-xl'
            onClick={() => rate2 ? setRate3(!rate3) === setRate4(false) === setRate5(false) : setRate3(false)}
          >
            {rate3 ? (<MdStar className='text-yellow-400' />) : (< MdOutlineStarRate className='text-yellow-400'/>)}
          </span>

          <span
            className='text-xl'
            onClick={() => rate3 ? setRate4(!rate4) === setRate5(false) : setRate4(false)}
          >
            {rate4 ? (<MdStar className='text-yellow-400' />) : (< MdOutlineStarRate className='text-yellow-400'/>)}
          </span>

          <span
            className='text-xl'
            onClick={() => rate4 ? setRate5(!rate5) : setRate5(false)}
          >
            {rate5 ? (<MdStar className='text-yellow-400' />) : (< MdOutlineStarRate className='text-yellow-400'/>)}
          </span>
            
        </div>
          
      </div>
    </>
  )
}

export default Rate