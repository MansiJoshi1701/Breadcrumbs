import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const { id } = useParams();
  const [product , setProduct] = useState([]);

  //1. Get all data from the source
  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())  
    .then(res => setProduct(res))
    
  } , [id])
  //2. Filter the data based on id
  //3. Display details of filtered data

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <img src={product.thumbnail} alt={id} />
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
        <h3>{product.description}</h3>
      </div>
    </div>
    
  )
}

export default ProductDetails