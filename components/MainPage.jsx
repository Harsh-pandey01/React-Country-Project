import React, { useContext, useEffect, useState } from 'react'
import SearchWrapper from '../components/SearchWrapper'
import CountryCardsList from '../components/CountryCardsList'
import MainPageShimmer from './MainPageShimmer';
import ThemeContext from '../Context/ThemeContext';

export default function MainPage() {
    const [countriesData,setCountriesData] = useState([]);
    const [searchQuery,setSearchQuery]=useState(" ")
    const [theme] = useContext(ThemeContext)
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(data =>data.json())
       .then(data => {setCountriesData(data)   
       })
      },[])

  return (  countriesData.length ===0 ? <MainPageShimmer /> :
    <div className={`main-wrapper ${theme}`}>
       <SearchWrapper setSearchQuery = {setSearchQuery}  setCountriesData={setCountriesData}/>
       <CountryCardsList searchQuery = {searchQuery} countriesData = {countriesData} setCountriesData={setCountriesData}/>
    </div>
  )
}
