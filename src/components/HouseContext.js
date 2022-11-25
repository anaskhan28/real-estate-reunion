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
  const [dates, setDates] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const[date, setDate] = useState('Date (any)');
  const [loading, setLoading] = useState(false);
  
  // countries state
  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;

    });
    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    setCountries(uniqueCountries) // new unique coutnries 
  }, []);

  // properties state
  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;

    });
    // remove duplicates
    const uniqueProperties = ['Property (any)', ...new Set(allProperties)]
    setProperties(uniqueProperties) // new unique coutnries 
  }, []);
  
    // date state
    useEffect(()=>{
      const allDate = houses.map((house)=>{
        return house.availableFrom;
  
      });
      // remove duplicates
      const uniqueDate = ['Date (any)', ...new Set(allDate)]
      setDates(uniqueDate) // new unique date 
      console.log(uniqueDate);
    }, []);
    
  
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
     && isDefault(price) && isDefault(date)){
      return house;
     }
      // if country is not default
      if(!isDefault(country) && isDefault(property)
      && isDefault(price) && isDefault(date) ){
        return house.country === country;
      }
     
      // if property is not default
      if(!isDefault(property) && isDefault(country)
      && isDefault(price) && isDefault(date)){
        return house.type === property;
      }
      // if date is not default
      if(!isDefault(date) && isDefault(property)
      && isDefault(country) && isDefault(price)){
        return house.availableFrom === date;
      }
      // if price is not default
      if(!isDefault(price)&& isDefault(country)
      && isDefault(property)){
        if(housePrice>=minPrice && housePrice<=maxPrice){
            return house;
        }
      }
      // if country, property and date is not default
      if(!isDefault(country) && !isDefault(property)
      && isDefault(price) && !isDefault(date)){
        return house.country === country 
        && house.type === property && house.availableFrom === date;
      }

      // if country, price and date is not default
      if(!isDefault(country) && !isDefault(price)
      && isDefault(property) && !isDefault(date)){
        if(housePrice >=minPrice && housePrice<= maxPrice){
          return house.country === country && house.availableFrom === date;
        }
      }
      //  property, price and date is not default
      if(!isDefault(property) && !isDefault(price)
      && isDefault(country) && !isDefault(date)){
        if(housePrice>= minPrice && housePrice<=maxPrice)
     {
        return house.type === property && house.availableFrom === date;
      }
      
    }
      //  property, price and country is not default
      if(!isDefault(property) && !isDefault(price)
      && !isDefault(country) && isDefault(date)){
        if(housePrice>= minPrice && housePrice<=maxPrice)
     {
        return house.type === property && house.country === country;
      }
      
    }
    //  property and date is not default
    if(!isDefault(property) && isDefault(price)
    && isDefault(country) && !isDefault(date)){
      return house.type === property && house.availableFrom === date;
    
    
  }
  //  date, price and country is not default
  if(isDefault(property) && !isDefault(price)
  && !isDefault(country) && !isDefault(date)){
    if(housePrice>= minPrice && housePrice<=maxPrice)
 {
    return house.country === country && house.availableFrom === date;
  }
  
}

    });

    setTimeout(()=>{
      return newHouses.length <1? setHouses([]):
      setHouses(newHouses),
      setLoading(false)
    }, 1000);
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
    date,
    setDate,
    dates,
    houses,
    loading,
    handleClick,
    
  }}>
    {children}</HouseContext.Provider>;
};

export default HouseContextProvider;
