import React from 'react';


const Header = () => {
  return( 
  <header className="py-6 mb-12 border-b">
  <div className="container mx-auto flex items-center justify-between">
  {/* logo */}
  <h1 className='text-dark font-serif font-semibold text-xl md:text-2xl mx-8'>Estatery</h1>

  <nav className='flex-1'>
        <ul className='max-w-[600px]  justify-evenly items-center hidden lg:flex cursor-pointer'>
          <li className='hover:bg-violet-200 hover:text-primary py-2 px-2 rounded-lg transition'>Rent</li>
          <li className='hover:bg-violet-200 hover:text-primary py-2 px-2 rounded-lg transition' >Buy</li>
          <li className='hover:bg-violet-200 hover:text-primary py-2 px-2 rounded-lg transition'>Sell</li>
          <li className='hover:bg-violet-200 hover:text-primary py-2 px-2 rounded-lg transition'>Manage Property</li>
        <li className='hover:bg-violet-200 hover:text-primary py-2 px-2 rounded-lg transition'>Resources</li>
      </ul>
    </nav>
    {/* buttons */}
    <div className="flex items-center gap-6">
      <div className='text-primary border border-primary  px-4 py-3 rounded-lg transition' 
      to=''>Log in</div>
      <div className='bg-primary hover:bg-violet-500 text-white px-4 py-3 rounded-lg transition' to=''>Sign up</div>
    </div>
    </div>
    </header>
  );
};

export default Header;
