import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import App from './App'
import MainPage from '../components/MainPage'
import CountryPage from '../components/CountryPage'

const root = createRoot(document.querySelector('#root'))

const routers = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children :[
      {
        path:'/',
        element:<MainPage />
      },{
        path:'/:CountryPage',
        element:<CountryPage />
      }
    ]
  }
])

root.render(
  <RouterProvider router={routers} />
)
