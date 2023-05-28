import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import { useAuthContext } from './context/AuthContext'

const App = () => {
  const { admin } = useAuthContext()
  
  return (
    <Routes>
      <Route path="/" element={admin ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
    </Routes>
  )
}

export default App