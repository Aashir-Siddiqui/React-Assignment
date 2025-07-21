import { useState } from 'react'
import './App.css'
import ProductCard from './component/ProductCard';

function App() {

  let products = [
    {
      name: "Mobile",
      price: 60000,
      status: true,
      image: "https://image.made-in-china.com/202f0j00TBwlKzJrEVfC/Xs16-PRO-Android-Mobile-Cellphone3-Inch-2000mAh-4-128GB-4G-LTE-Mini-Smartphone.webp",
    },
    {
      name: "LED",
      price: 50000,
      status: true,
      image: "https://www.multynet.com.pk/wp-content/uploads/2025/01/50-inches-700x907.jpg",
    },
    {
      name: "Bike",
      price: 40000,
      status: false,
      image: "https://imgd.aeplcdn.com/272x153/n/cw/ec/201293/hunter-350-2025-right-side-view-2.jpeg?isig=0&q=80",
    },
    {
      name: "AirPods",
      price: 15000,
      status: true,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1694016006698",
    },
    {
      name: "Alarm Clock",
      price: 2000,
      status: true,
      image: "https://media.istockphoto.com/id/1637505998/vector/ringing-alarm-clock-vector-illustration.jpg?s=612x612&w=0&k=20&c=kwqOAR2W3BoeDjjAuZS8rqba9smArS-1JoD8KeCmZ2Y=",
    },
    {
      name: "Backpack",
      price: 3000,
      status: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBC1LNDNTHpQ5mIrb5_LgeVX4y_jA7hTlXEw&s",
    },
  ];

  const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / products.length

  const labeledProducts = [...products].map((p) => ({
    ...p,
    priceLabel: p.price > averagePrice ? 'Above average' : 'Below average',
  })).sort((a, b) => a.price - b.price);

  return (
    <>
      <h1>Show all products by sorting on price (low high)</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          products.sort((a, b) => a.price - b.price).filter((p) => p.price > 0).map((p, index) => (
            <ProductCard
              key={index}
              name={p.name}
              image={p.image}
              price={p.price}
              status={p.status}
              priceLabel={p.price > averagePrice ? 'Above average' : 'Below average'}
            />
          ))
        }
      </div>

      <h1>Show only those products whose price is greater than 45000, sorted by price (high to low)</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          products.sort((a, b) => b.price - a.price).filter((p) => p.price >= 45000).map((p, index) => (
            <ProductCard
              key={index}
              name={p.name}
              image={p.image}
              price={p.price}
              status={p.status}
              priceLabel={p.price > averagePrice ? 'Above average' : 'Below average'}
            />
          ))
        }
      </div>

      <h1>Show all products after increasing their price by 10%.</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          products.filter((p) => p.price >= 0).map((p, index) => (
            <ProductCard
              key={index}
              name={p.name}
              image={p.image}
              price={p.price + p.price * 0.1}
              status={p.status}
              priceLabel={p.price > averagePrice ? 'Above average' : 'Below average'}
            />
          ))
        }
      </div>

      <h1>Show all products whose name starts with 'a' or 'A'</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          products.filter((p) => p.name.toLocaleUpperCase()[0] === "A").map((p, index) => (
            <ProductCard
              key={index}
              name={p.name}
              image={p.image}
              price={p.price}
              status={p.status}
              priceLabel={p.price > averagePrice ? 'Above average' : 'Below average'}
            />
          ))
        }
      </div>

      <h1>Show top 3 most expensive products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          products.sort((a, b) => b.price - a.price).slice(0, 3).filter((p) => p.price > 0).map((p, index) => (
            <ProductCard
              key={index}
              name={p.name}
              image={p.image}
              price={p.price}
              status={p.status}
              priceLabel={p.price > averagePrice ? 'Above average' : 'Below average'}
            />
          ))
        }
      </div>

      <h1>Show all products with price labeled as (Below average or Above average)</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {
          labeledProducts.map((p, index) => (
            <ProductCard
              key={index}
              name={p.name}
              image={p.image}
              price={p.price}
              status={p.status}
              priceLabel={p.priceLabel}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
