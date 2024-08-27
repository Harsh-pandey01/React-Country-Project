import React, { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

import {ThemeProvider } from '../Context/ThemeContext'

export default function App() {

  return (
    <ThemeProvider>
     <Header />
     <Outlet />
    </ThemeProvider>
  )
}
