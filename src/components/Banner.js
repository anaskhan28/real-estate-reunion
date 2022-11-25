import React from 'react';
import Search from '../components/Search';
import Image from '../assets/img/house-banner.png';

const Banner = () => {
  return(
  <section className="h-full mb-8 xl:mb-24">
  <div className="flex flex-col lg:flex-row">
    <div className="lg:ml-8 xl:ml-[135px] flex flex-col 
    items-center lg:text-left justify-center flex-1 px-4 lg:px-0">
      <h1 className="text-4xl lg:text-[58px] font-semibold 
      leading-none mb-6">
        <span className="text-primary">Buy</span> or <span className="text-primary">Rent</span> Dream House
      </h1>
      <p className="max-w-[700px] mb-8 text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nam a lorem ut lorem dignissim blandit. Morbi eget diam non 
      magna sagittis vehicula. Mauris maximus non purus ut efficitur.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nam a lorem ut lorem dignissim blandit. Morbi eget diam non 
      magna sagittis vehicula. Mauris maximus non purus ut efficitur.
      </p>
    </div>
    {/* banner-image */}
    <div className="hidden flex-1 lg:flex justify-end items-end">
      <img src={Image} alt=''/>
    </div>
  </div> 

  

  <Search/>
  </section>
  )
};

export default Banner;
