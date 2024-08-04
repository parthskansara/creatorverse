import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation/>
      <div className='main-container'>
        <Outlet/>
      </div>      
    </>
  )
}

export default App
