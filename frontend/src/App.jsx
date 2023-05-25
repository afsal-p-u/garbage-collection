import { Navigate, Route, Routes } from "react-router-dom"
import { useContext } from "react"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Book from "./pages/Book"
import History from "./pages/History"
import { AuthContext } from "./context/AuthContext"

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      <Route path="/book" element={user ? <Book /> : <Navigate to="/login" />} />
      <Route path="/history" element={user ? <History /> : <Navigate to="/login" />} />
    </Routes>
  )
}

export default App
