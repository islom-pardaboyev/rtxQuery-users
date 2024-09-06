import React from 'react'
import Navbar from './components/Navbar'
import CustomRoutes from './routes'

function App() {
  return (
    <main className='grid grid-cols-12'>
      <Navbar/>
      <CustomRoutes/>
    </main>
  )
}

export default App