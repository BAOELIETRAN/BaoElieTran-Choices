import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item);
  };
  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item);
  };
  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item);
  };

  const refreshCart = async () => {
    setCart(await commerce.cart.refresh());
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items || 0} handleDrawerToggle={handleDrawerToggle} />
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
