import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function ProductListing() {

  const [data , setData] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => setData(res.products));
    
  } , [])

  return (

    <div>
      <h1>Product Listing</h1>

      <div className='product-grid'>
        {
          data.map(prod => {
            return(
              <div className='product-card' key={prod.id}>
                
                <Link to= {`/products/${prod.id}`}>
                  <img src={prod.thumbnail} alt={prod.id}/>
                  <h3>{prod.title}</h3>
                  <h3>${prod.price}</h3>
                </Link>

              </div>
            )
          })
        }
      </div>
    </div>
    

  )
}

export default ProductListing