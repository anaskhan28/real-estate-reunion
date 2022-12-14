import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { HouseContext } from './HouseContext';
// icons
import {RiSearch2Line} from 'react-icons/ri'
import DateDropdown from './DateDropdown';


const Search = () => {

  const {handleClick} = useContext(HouseContext);

  return( 
  <div className="px-[30px] py-6 min-w-[100px] mx-auto 
  flex flex-col lg:flex-row justify-between gap-4 
  lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white
  lg:bg-transparent lg:backdrop-blur rounded-lg ">
    <CountryDropdown/>
    <PropertyDropdown/>
    <DateDropdown/>
    <PriceRangeDropdown/>
    <button
    onClick={()=> handleClick()}
    className='bg-primary hover:bg-violet-500 
    transition w-full lg:max-w-[100px] h-16 rounded-lg flex justify-center
    items-center text-white text-lg'>
      <RiSearch2Line/>
    </button>
  </div>
  );
};

export default Search;
