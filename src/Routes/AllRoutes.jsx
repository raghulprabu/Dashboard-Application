import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Pages from '../Components/Common/dashboard/Pages'
import Project from '../Components/Common/Projects/Project'
import CreateUser from '../Components/layout/CrudApplication/CreateUser'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Pages/>} />
        <Route path='/projects' element={<Project/>}/>
        <Route path='/create-user' element={<CreateUser/>}/>
    </Routes>
    
  )
}

export default AllRoutes
