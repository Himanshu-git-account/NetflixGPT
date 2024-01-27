import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const appLayout = createBrowserRouter([
{
    path:'/',
    element:<Login />
},
{
    path:'/browse',
    element:<Browse />
}
    ])

const Body = () => {
  return (
    <RouterProvider router={appLayout} />
  )
}

export default Body