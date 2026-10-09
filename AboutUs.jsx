import React from 'react';

export default function AboutUs() {
  return (
    <main className="content-page about-page">
      <p className="eyebrow">A little more green</p>
      <h1>About Paradise Nursery</h1>
      <p>
        Paradise Nursery believes every home can feel more welcoming with the
        natural beauty of plants. We make it easier to discover houseplants for
        different spaces, styles, and levels of plant-care experience.
      </p>
      <p>
        From leafy statement plants to compact desk companions, our collection
        is selected to help you bring nature into your everyday life.
      </p>
      <div className="about-values">
        <article><span>01</span><h2>Choose your green</h2><p>Explore plants grouped into simple categories.</p></article>
        <article><span>02</span><h2>Shop with ease</h2><p>Manage your selections and quantities in one cart.</p></article>
        <article><span>03</span><h2>Grow your space</h2><p>Find a plant that suits your home and routine.</p></article>
      </div>
    </main>
  );
}
