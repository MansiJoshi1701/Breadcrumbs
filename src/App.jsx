import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'

function App() {
  

  return (
    <BrowserRouter>
      <div className='app'>
        <h1>My Store</h1>

        {/* Breadcrumbs */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
