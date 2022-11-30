import { Cart, Checkout, Home, Login, ProductDetail, Register, Shop } from '@/pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/shop/:id' element={<ProductDetail />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}

export default Routers;
