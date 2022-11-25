import React, { useState } from 'react';
import {BiBed, BiBath,BiArea} from 'react-icons/bi';
import {RiHeart2Line, RiHeart2Fill} from 'react-icons/ri';
const House = ({house}) => {
  const {image, type, country,address, bedrooms, bathrooms, 
  surface, price, availableFrom} = house;
  const [like, setLike] = useState(false);
  

  return <div className='bg-white shadow-1 p-5 rounded-lg
  rounded-tl-[90px] w-full max-w-[500px] mx-auto cursor-pointer
  hover:shadow-2xl transition'>
    <img className="mb-8" src={image}alt=''/>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full
      text-white px-3'>{type}</div>
      <div className='bg-violet-500 rounded-full 
        px-3  text-white'>{country}</div>
    
    </div>
    <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center text-gray-600
      gap-1'>
        <div className='text-[20px]'>
          <BiBed/>
          </div>
        <div>{bedrooms}</div>
      </div>
      <div className='flex items-center text-gray-600
      gap-1'>
        <div className='text-[20px]'>
          <BiBath/>
          </div>
        <div>{bathrooms}</div>
      </div>
      <div className='flex items-center text-gray-600
      gap-1'>
        <div className='text-[20px]'>
          <BiArea/>
          </div>
        <div>{surface}</div>
      </div>
    </div>
    <div className='text-lg font-semibold text-violet-600
    mb-4'>{price}</div>
    <div className=' text-gray-600 gap-1
    mb-4'>Date: {availableFrom}</div>
    <span onClick={()=> setLike((prevState) =>!prevState)} className=' flex justify-end text-xl text-primary'>{like? <RiHeart2Fill/>: <RiHeart2Line/>}</span>
  </div>
};

export default House;
