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
  
  const handleClick = () =>{
  setLoading(true);

    //  function to check if the string is includes "any"
    const isDefault = (str) =>{
      return str.split(' ').includes('(any)');
    };
    // initial value to integer
    const minPrice = parseInt(price.split(' ')[0]);
    
    // second value to integer
    const maxPrice = parseInt(price.split(' ')[2]);
    
    const newHouses = housesData.filter((house)=>{
      const housePrice = parseInt(house.price);

      if(
        house.country === country && 
        house.type === property &&
        housePrice>= minPrice && 
        housePrice<=maxPrice
      ){
        return house;
      }
    //  if country all are defaullt
     if(isDefault(country) && isDefault(property)
     && isDefault(price)){
      return house;
     }
      // if country is not default
      if(!isDefault(country) && isDefault(property)
      && isDefault(price)){
        return house.country === country;
      }
     
      // if property is not default
      if(!isDefault(property) && isDefault(country)
      && isDefault(price)){
        return house.type === property;
      }
      // if price is not default
      if(!isDefault(price)&& isDefault(country)
      && isDefault(property)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
            return house;
        }
      }
      // if country and price is not default
      if(!isDefault(country) && !isDefault(property)
      && isDefault(price)){
        return house.country === country && house.type === property;
      }

      // if country and price is not default
      if(!isDefault(country) && !isDefault(price)
      && isDefault(property)){
        if(housePrice >=minPrice && housePrice<= maxPrice){
          return house.country === country;
        }
      }
      //  property and price is not default
      if(!isDefault(property) && !isDefault(price)
      && !isDefault(country)){
        if(housePrice>= minPrice && housePrice<=maxPrice)
     {
        return house.type === property;
      }
    }

    });
    setTimeout(()=>{
      return newHouses.length<1 ? setHouses([])
    })
  };

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
    handleClick,
  }}>
    {children}</HouseContext.Provider>;
};

export default HouseContextProvider;
