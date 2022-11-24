import React from 'react';
import {BiBed, BiBath,BiArea} from 'react-icons/bi';

const House = ({house}) => {
  const {image, type, country,address, bedrooms, bathrooms, 
  surface, price} = house;
  return <div className='bg-white shadow-1 p-5 rounded-lg
  rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer
  hover:shadow-2xl transition'>
    <img className="mb-8" src={image}alt=''/>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className=''>{type}</div>
      <div>{country}</div>
      <div>{address}</div>
    </div>
  </div>;
};

export default House;
