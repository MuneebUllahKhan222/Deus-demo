import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../components/Navbar'

const ProjectRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route
          element={(
            <>
              <Navbar />
              <Outlet />
            </>
          )}
        >
            <Route path='/' Component={Home} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default ProjectRoutes