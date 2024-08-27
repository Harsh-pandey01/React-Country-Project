import React, { useEffect ,useState } from 'react'
import CountryCard from './CountryCard';


export default function CountryCardsList({searchQuery,countriesData}) {

  return (

<div className='country-list-wrapper wrapper'>
       {
        countriesData.length === 0 ? 'loading' :
     
        countriesData.filter((countryData)=>{

          return countryData.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        }).map((countryData,index)=>{
          return <CountryCard key={index}
         title= {countryData.name.common}
         population = {countryData.population.toLocaleString('en-IN')}
         capital = {countryData.capital}
         flag = {countryData.flags.svg}
          />
      })
        
       
       }
    </div>

   
  )
}
