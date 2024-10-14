import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Pages from '../Components/Common/dashboard/Pages'
import Project from '../Components/Common/Projects/Project'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Pages/>} />
        <Route path='/projects' element={<Project/>}/>
    </Routes>
    
  )
}

export default AllRoutes
