import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice.jsx';

const categories = [
  {
    name: 'Air-Purifying Favorites',
    description: 'Leafy companions for a fresher-feeling room.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 18, image: 'photo-1593482892290-f54927ae2b8a', description: 'Upright, architectural leaves and easy-care character.' },
      { id: 'spider-plant', name: 'Spider Plant', price: 14, image: 'photo-1572688484438-313a6e50c333', description: 'A lively cascading plant with arching green leaves.' },
      { id: 'peace-lily', name: 'Peace Lily', price: 22, image: 'photo-1593691509543-c55fb32e5cee', description: 'Elegant foliage with graceful white blooms.' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 26, image: 'photo-1509423350716-97f9360b4e09', description: 'Glossy leaves make a bold indoor statement.' },
      { id: 'areca-palm', name: 'Areca Palm', price: 32, image: 'photo-1512428813834-c702c7702b78', description: 'Feathery fronds bring a tropical feeling indoors.' },
      { id: 'boston-fern', name: 'Boston Fern', price: 19, image: 'photo-1597055181300-e3633a917d5b', description: 'Soft, textured fronds for a lush corner.' },
    ],
  },
  {
    name: 'Low-Maintenance Plants',
    description: 'Resilient picks for busy plant parents.',
    plants: [
      { id: 'zz-plant', name: 'ZZ Plant', price: 24, image: 'photo-1632207691143-643e2c7a6e3f', description: 'Glossy leaves and a relaxed care routine.' },
      { id: 'jade-plant', name: 'Jade Plant', price: 16, image: 'photo-1501004318641-72ee46df725f', description: 'A compact succulent with plump green leaves.' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 13, image: 'photo-1509423350716-97f9360b4e09', description: 'Sculptural succulent leaves for a sunny sill.' },
      { id: 'pothos', name: 'Golden Pothos', price: 17, image: 'photo-1497250681960-ef046c08a56e', description: 'Trailing vines with cheerful golden variegation.' },
      { id: 'cast-iron', name: 'Cast Iron Plant', price: 28, image: 'photo-1485955900006-10f4d324d411', description: 'A durable leafy plant with a classic shape.' },
      { id: 'haworthia', name: 'Haworthia', price: 12, image: 'photo-1459411552884-841db9b3cc2a', description: 'A small, patterned succulent for desks and shelves.' },
    ],
  },
  {
    name: 'Decorative Statement Plants',
    description: 'Eye-catching shapes and textures for your space.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 35, image: 'photo-1614594975525-e45190c55d0b', description: 'Iconic split leaves with a bold tropical look.' },
      { id: 'fiddle-leaf', name: 'Fiddle-Leaf Fig', price: 42, image: 'photo-1509423350716-97f9360b4e09', description: 'Large violin-shaped leaves for a bright room.' },
      { id: 'calathea', name: 'Calathea', price: 27, image: 'photo-1597055181300-e3633a917d5b', description: 'Decorative foliage with striking natural patterns.' },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 49, image: 'photo-1598880940080-ff9a29891b85', description: 'Upright tropical leaves with dramatic presence.' },
      { id: 'philodendron', name: 'Heartleaf Philodendron', price: 20, image: 'photo-1497250681960-ef046c08a56e', description: 'Heart-shaped leaves on graceful trailing stems.' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 23, image: 'photo-1512428813834-c702c7702b78', description: 'A classic palm with delicate, arching fronds.' },
    ],
  },
];

const imageUrl = (image) => `https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=80`;

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const inCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="content-page plants-page">
      <div className="page-heading">
        <p className="eyebrow">The plant collection</p>
        <h1>Find your new favorite plant</h1>
        <p>Thoughtfully chosen greenery for every corner of your home.</p>
        <Link className="text-link" to="/cart">View your cart →</Link>
      </div>
      {categories.map((category) => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading"><div><h2>{category.name}</h2><p>{category.description}</p></div></div>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={imageUrl(plant.image)} alt={plant.name} loading="lazy" />
                <div className="plant-card-body">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="plant-card-bottom">
                    <strong>${plant.price.toFixed(2)}</strong>
                    <button className="primary-btn small-btn" disabled={inCart(plant.id)} onClick={() => dispatch(addItem(plant))}>
                      {inCart(plant.id) ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
