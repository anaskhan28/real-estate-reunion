import React from 'react';
import Header from './components/Header';

import Home from './pages/Home';


const App = () => {
  return( 
  <div className ="min-h-[100vh] mx-auto bg-white">
    <Header/>
    <Home/>
  </div>
  );
};


export default App;
