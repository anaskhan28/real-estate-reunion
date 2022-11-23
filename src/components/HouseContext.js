import React,{useState,useEffect, createContext} from 'react';

// dummy data
import {housesData} from '../data';


export const HouseContext = createContext();
const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const[countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  
  // countries state
  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;

    });
    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    setCountries(uniqueCountries) // new unique coutnries 
  }, [houses]);

  // properties state
  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;

    });
    // remove duplicates
    const uniqueProperties = ['Property (any)', ...new Set(allProperties)]
    setProperties(uniqueProperties) // new unique coutnries 
  }, [houses]);


  return <HouseContext.Provider 
  value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
  }}>
    {children}</HouseContext.Provider>;
};

export default HouseContextProvider;
