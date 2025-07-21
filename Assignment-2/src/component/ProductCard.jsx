import React from 'react'

export default function ProductCard({ name, price, status, image, priceLabel }) {
    return (
        <div style={{ width: '200px', textAlign: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h2 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{name}</h2>
            <p>Price: {price.toFixed(2)}</p>
            <p>{status ? 'Available' : 'Not available'}</p>
            <p>Price Label: {priceLabel}</p>
        </div>
    );
}
