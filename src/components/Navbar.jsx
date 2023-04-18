import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../CartContext/CartContext'

const Navbar = () => {
  const{Cart} = useContext(CartContext)

  return (<>
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
      </div>
    </nav>


<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
  <Link className="navbar-brand text-dark p-2" to="/"><h3>KOS</h3></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <button class="nav-link active">Cloth</button>
        </li>
        <li class="nav-item">
          <button class="nav-link active">Laptop</button>
        </li>
        <li class="nav-item">
          <button class="nav-link active">TV</button>
        </li>
      </ul>
      <Link className="text-light navbar-brand border border-light p-2 px-3" to="/cart">Cart {Cart.length}</Link>
    </div>
  </div>
</nav>
</>

  )
}

export default Navbar
