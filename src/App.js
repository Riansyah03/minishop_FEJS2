import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout disini sebagai halaman utamananya
import Layout from './Layout/Layout'
// Product tampilan halaman Product
import Product from './Page/Product'
import ProductDetail from './Page/ProductDetail'
import ShoppingCart from './Page/ShoppingCart'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* elemet = berpindah ke halaman yg dituju */}
        <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home</h1>} /> 
        <Route path="/login" element={<h1>Login</h1>} /> 
        
        {/* mengupdate product menuju kehalaman masing masing */}
        <Route path="products/">
          <Route index element={<Product />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        <Route path="/categories" element={<h1>Categories</h1>} /> 
        <Route path="/shopping-cart" element={<ShoppingCart />} /> 
        <Route path="/order-history" element={<h1>Order History</h1>} /> 
        </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
