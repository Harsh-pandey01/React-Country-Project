import React, { useContext, useEffect, useState } from "react";
import { Link, useParams,useLocation } from "react-router-dom";

import "../src/countrycss.css";
import ThemeContext from "../Context/ThemeContext";


export default function CountryPage() {
  const { CountryPage } = useParams();
  const [countryData, setCountryData] = useState({});
  const [theme] = useContext(ThemeContext)

  useEffect(() => {
    fetch(`
             https://restcountries.com/v3.1/name/${CountryPage}?fullText=true`)
      .then((data) => data.json())
      .then(([data]) => {
      
        setCountryData({
          name: data.name.common,
          flag: data.flags.svg,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          currencies: data.currencies && Object.keys(data.currencies).join(","),
          capital: data.capital && data.capital.map((capital) => capital).join(","),
          tld: data.tld.map((td) => td).join(","),
          languages: data.languages && Object.values(data.languages).join(","),
          borders: [],
        });

        if (!data.borders) {
          data.borders = [];
        }




        // Making Promises to multiple borders and resolve using the Promise.all
        Promise.all(
          data.borders.map((border) => {
           return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((borderDetail)=> borderDetail.json())
            .then(([borderData])=>{
              return borderData.name.common
            })
          })
        ).then((bordersData) => {
        
          setCountryData((prevData)=>({...prevData , borders : bordersData }))
        });

      });
  }, [CountryPage]);

  return Object.keys(countryData).length === 0 ? (
    ""
  ) : (
   <div className={`countryPage-main-wrapper ${theme}`}>
     <div className={`countryPage-wrapper  wrapper`}>
      <div className='back-btn'>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </button>
      </div>
      <div className='countryPage-details-wrapper'>
        <div className='country-flag'>
          <img src={countryData.flag} alt='country-flag' />
        </div>
        <div className='countryPage-details'>
          <h4 className='title'>{countryData.name}</h4>
          <div className='details-grid'>
            <div>
              <p>Population : <span>{countryData.population.toLocaleString('eg-IN')}</span></p>
              <p>Region : <span>{countryData.region}</span></p>
              {
                countryData.subregion && <p>SubRegion : <span>{countryData.subregion}</span></p>
              }
              {
                countryData.capital && <p>Capital : <span>{countryData.capital}</span></p>
              }
            </div>
            <div>
              <p>Top Level Domains : <span>{countryData.tld}</span></p>
              {
                countryData.currencies &&  <p>Currencies : <span>{countryData.currencies}</span></p>
              }
              {
                countryData.languages && <p>Languages : <span>{countryData.languages}</span></p>
              }
            </div>
          </div>
          {countryData.borders.length !== 0 && (
            <div className='borders-wrapper'>
              <b>Borders :</b>
              {countryData.borders.map((border) => {
                return <Link to={`/${border}`} key={border} className="border">{border}</Link>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
   </div>
  );



}
