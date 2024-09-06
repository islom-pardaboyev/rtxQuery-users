import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AllUsers, EditUsers } from '../pages'

function CustomRoutes() {
  return (
    <div className='col-span-10'>
        <Routes>
            <Route path='/' element={<AllUsers/>}/>
            <Route path='/add' element={<EditUsers/>}/>
            <Route path='/update/:id' element={<EditUsers/>}/>
        </Routes>
    </div>
  )
}

export default CustomRoutes