import React,{useState, useContext} from 'react';

// icons
import {RiCalendar2Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import {Menu} from '@headlessui/react';
 import {HouseContext} from './HouseContext';

const DateDropdown = () => {
  const {date, setDate, dates} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  

  return( 
  <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={()=> setIsOpen(!isOpen)}
     className='dropdown-btn w-full text-left'>
      <RiCalendar2Line className='dropdown-icon-primary' />
      <div>
        <div className="text-[15px] font-medium leading-tight">{date}</div>
        <div className="text-[13px]">Select Move-in date</div>
        </div>
        {
          isOpen?(
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ):(
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {dates.map((date,index)=>{
        return(
          <Menu.Item 
          onClick = {()=> setDate(date)}
          className='cursor-pointer hover:text-violet-700 transition' 
          as='li' key={index}>
            {date}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>
  )
};

export default DateDropdown;
