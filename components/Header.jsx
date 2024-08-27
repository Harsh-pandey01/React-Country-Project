import { useContext } from 'react';
import '../src/index.css'
import ThemeContext from '../Context/ThemeContext';





export default function Header() {

  const [theme,setTheme] = useContext(ThemeContext)

  return (
    <div className={`header-section ${theme}` }>
      <div className='header-wrapper wrapper'>
        <div className="header-logo">
         Where in the World!
        </div>
        <button className={`dark-btn ${theme}`} onClick={()=>{
          theme == 'Light' ? setTheme('dark') : setTheme('Light')
        }}>
        <i className="fa-regular fa-moon"></i>
        Dark Mode
        </button>
      </div>
    </div>
  );
}
