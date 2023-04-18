import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const intitialstate = {
        Product: []
    }

    const [state, dispatch] = useReducer(ProductReducer, intitialstate)

    return (
        <ProductContext.Provider value={{
            ...state,
            dispatch

        }}>
            {
                children
            }
        </ProductContext.Provider>
    )

}

export default ProductContext