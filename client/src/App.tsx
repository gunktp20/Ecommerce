import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Register, Login, ProductList , Home ,Cart } from './pages'
import { ProtectedRoute } from './components'
import AdminPanel from './pages/AdminPanel'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/product" element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
