import Navbar from "@/components/shared/Navbar.jsx";

import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/auth/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>

    </div>
  )
}

export default App
