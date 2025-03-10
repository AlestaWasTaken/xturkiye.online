import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App