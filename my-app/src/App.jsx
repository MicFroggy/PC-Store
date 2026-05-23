import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Configurator from './pages/Configurator/Configurator'
import Comparison from './pages/Comparison/Comparison'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App