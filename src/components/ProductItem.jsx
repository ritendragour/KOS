import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import CartContext from '../CartContext/CartContext'
// import { getProduct } from '../context/ProductAction'

const ProductItem = ({ Product }) => {
  const { image, title, price , id } = Product
  const {dispatch } = useContext(CartContext)

  const addCart = async (Product) => {
    // var data = await getProduct()
    document.getElementById('id'+id).style.display = "none"
    dispatch({
      type: "ADD_CART", 
      payload: Product
    })

  }
  return (
    <div className="card mt-5 productItem col-xl-4 p-3">
  <div className="card card-body">

      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
       <span className='df'>
        <h3 className="card-text"><b>${price}</b> </h3>
        <button className="btn btn-primary" id={"id"+id} onClick={() => addCart(Product)}>Add Cart</button>
       </span>
          
      </div>
      </div>

    </div>
  )
}

export default ProductItem
