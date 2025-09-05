import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"


function Home() {

  const [trendingProducts , setTrendingProducts] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => setTrendingProducts(res.products.slice(0,6)))
    
  } , [])

  return (
    <div>
      <h2>HOME</h2>
      <span>Trending Products 🔥</span>
      <div className='product-grid'>
        {
          trendingProducts.map((product) => {
            return(
              <div className='product-card' key={product.id}>

                <Link to={`/products/${product.id}`}>
                  <img src={product.thumbnail} alt={product.id} />
                  <div>{product.title}</div>
                </Link>
                
              </div>
            )
          })
        }
      </div>

      <Link to="/products">
        <button style={{ width: "100%" , padding: 10 }}>View all Products</button>
      </Link>

    </div>
  )
}

export default Home