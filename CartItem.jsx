import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity, clearCart } from './CartSlice.jsx';

const imageUrl = (image) => `https://images.unsplash.com/${image}?auto=format&fit=crop&w=240&q=80`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="content-page cart-page">
        <p className="eyebrow">Your green picks</p>
        <h1>Your shopping cart</h1>
        <div className="empty-cart"><span className="empty-cart-icon">🪴</span><h2>Your cart is waiting to bloom</h2><p>You haven't added any plants yet.</p><Link className="primary-btn button-link" to="/plants">Continue Shopping</Link></div>
      </main>
    );
  }

  return (
    <main className="content-page cart-page">
      <div className="page-heading cart-heading"><p className="eyebrow">Almost home</p><h1>Your Shopping Cart</h1><p>{itemCount} {itemCount === 1 ? 'plant' : 'plants'} selected for your space.</p></div>
      <div className="cart-layout">
        <section className="cart-items" aria-label="Items in your cart">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={imageUrl(item.image)} alt={item.name} />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p className="unit-price">Unit price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
              <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-line"><span>Items ({itemCount})</span><span>${total.toFixed(2)}</span></div>
          <div className="summary-line"><span>Delivery</span><span>Calculated later</span></div>
          <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="primary-btn checkout-btn" onClick={() => setCheckoutMessage('Coming Soon! Checkout will be available in a future update.')}>Checkout</button>
          {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
          <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>Clear cart</button>
        </aside>
      </div>
    </main>
  );
}
