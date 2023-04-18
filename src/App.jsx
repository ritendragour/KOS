import { CartProvider } from "./CartContext/CartContext"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import { ProductProvider } from "./context/ProductContext"
import { BrowserRouter as Router, Route , Routes } from "react-router-dom"
function App() {
  return (
    <ProductProvider>
      <CartProvider>
       <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Product/>}  />
          <Route path="/cart" element={<Cart/>}  />
        </Routes>
      </div>
   </Router>
   </CartProvider>
    </ProductProvider>
  )
}

export default App
