import { createContext, useReducer } from "react";
import CartProdiver from "./CartReducer"
import CartReducer from "./CartReducer";
const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const intitialstate = {
        Cart: []
    }
    const [state, dispatch] = useReducer(CartReducer, intitialstate)

    return (
        <CartContext.Provider value={{
            ...state,
            dispatch

        }}>
            {
                children
            }
        </CartContext.Provider>
    )

}

export default CartContext