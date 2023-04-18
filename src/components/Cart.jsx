import React, { useContext, useEffect } from 'react'
import CartItem from './CartItem'
import CartContext from '../CartContext/CartContext'
const Cart = () => {
  const { Cart } = useContext(CartContext)

  // const totalPrice = Cart.reduce((p, c) => {
  //   return p + c.price
  // }, 0)

  return (
    <>
      <div className="float-end w-100">
        <h2 type="button" id={Cart.length === 0 ? "noPrice" : "havePrice"}
          className=" float-end mx-5 btn-closed rounded-0 mt-4 text-light bg-success border p-2 py-2 px-5">
          Product Quantity : &nbsp;{Cart.length}</h2>
      </div>

      <div className="container">
        <div className='row gx-5'>
          {
            Cart.map(cart => <CartItem key={cart.id} cart={cart} />)
          }
        </div>
      </div>
    </>
  )
}

export default Cart
