import React from 'react';
import Header from './components/Header';

import Home from './pages/Home';


const App = () => {
  return( 
  <div className ="max-w-[1440px] mx-auto bg-white">
    <Header/>
    <Home/>
  </div>
  );
};

export default App;
