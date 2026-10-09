import React from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart">🛒 Cart <span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main className="landing-page">
      <div className="landing-content">
        <p className="eyebrow">Bring nature home</p>
        <h1 className="landing-title">Find your little piece of paradise.</h1>
        <p>Beautiful houseplants for brighter, calmer spaces.</p>
        <button className="primary-btn" onClick={() => navigate('/plants')}>Get Started</button>
        <Link className="landing-about-link" to="/about">Learn about us</Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<main className="content-page"><h1>Page not found</h1><Link to="/">Return home</Link></main>} />
      </Routes>
      <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow something beautiful.</footer>
    </>
  );
}
