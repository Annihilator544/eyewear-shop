import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartProvider from './context/CartProvider';

import Header from './components/Header';
import Footer from './components/Footer';

import ProductGallery from './components/ProductGallery';
import ProductGalleryLayout from './layout/ProductGalleryLayout';
import ProductPageLayout from './layout/ProductPageLayout';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import UnderConstruction from './pages/UnderConstruction';

import './sass/main.scss';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route element={<ProductGalleryLayout />}>
            <Route
              index
              path="/products"
              element={<ProductGallery categoryType="allProducts" />}
            />
            <Route
              path="/products/black"
              element={<ProductGallery categoryType="black" />}
            />
            <Route
              path="/products/white"
              element={<ProductGallery categoryType="white" />}
            />
          </Route>
          <Route element={<ProductPageLayout />}>
            <Route
              path="/products/black/:productId"
              element={<ProductPage />}
            />
            <Route
              path="/products/white/:productId"
              element={<ProductPage />}
            />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
);
