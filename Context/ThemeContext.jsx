import React, { createContext, useState } from 'react'

 const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme,setTheme] = useState("Light")
    return <ThemeContext.Provider value={[theme,setTheme]}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeContext ;






