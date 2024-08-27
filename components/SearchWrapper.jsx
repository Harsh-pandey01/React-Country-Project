import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext';


async function selectedResponse(query){

  let url ;
  if(query){
    url = `https://restcountries.com/v3.1/region/${query}`
  }else{
    url = 'https://restcountries.com/v3.1/all'
  }

  const data = await fetch(url)
  const res = await data.json()
  return res 
}


export default function SearchWrapper({setSearchQuery,setCountriesData}) {
  const [theme] = useContext(ThemeContext)
  return (
    <div className="search-wrapper wrapper">
      <input type="text" className={`search-input ${theme}`} placeholder='Search Your Country Here....' 
      onChange={(e)=>{
      setSearchQuery(e.target.value)
      }}

      />
      <select name="Region" className={`selected-region ${theme}` } onChange={(e)=>{
          const res = selectedResponse(e.target.value)
          res.then((data)=>{
            setCountriesData(data) 
          })
           
      }}>
        <option selected  value={""}>Select Region</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Americas">Americas</option>
      <option value="Africa">Africa</option>
      <option value="Antarctic">Antarctic</option>
      <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
