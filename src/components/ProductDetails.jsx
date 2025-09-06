import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const { id } = useParams();
  const [product , setProduct] = useState(null);
  const [loading , setLoading] = useState(true);


  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())  
    .then(res => {
      setProduct(res);
      setLoading(false);
    })
    
  } , [id])


  return (
    <div>
      <h1>Product Details</h1>
      {loading ? <p>Loading...</p> :
        <div>
          <img src={product.thumbnail} alt={id} />
          <h3>{product.title}</h3>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
        </div>
      }
    </div>
    
  )
}

export default ProductDetails