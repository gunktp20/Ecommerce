import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Register, Login, ProductList } from './pages'
import { ProtectedRoute } from './components'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<div>
          Landing
        </div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
