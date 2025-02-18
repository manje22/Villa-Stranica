import { useState } from 'react'
import MainPage from './components/mainPage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
