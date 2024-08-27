import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../Context/ThemeContext'


export default function CountryCard({title,population,flag,capital}) {
  const [theme] = useContext(ThemeContext)
  return (
    <Link to={`/${title}`}>
      <div className={`country-card ${theme}`} >
      <div className="flag-wrapper">
        <img src={flag} alt="country-flag" />
      </div>
      <div className="country-detail-wrapper">
        <h1 className="title">{title}</h1>
        <p>Population :<span>{population}</span></p>
        <p className='capital'>Capital : <span>{capital}</span></p>
      </div>
    </div>
    </Link>
  )
}
