const CartReducer = (state, action) =>{

    switch(action.type){
        
        case "ADD_CART" :
        return {
            ...state,
            Cart : [...state.Cart, action.payload]
        }

        case "REMOVE_CART" :
            return {
                ...state,
                Cart : state.Cart.filter(item => item.id !== action.payload)
            }
    
        default:
            return state
    }
    }
    
    export default CartReducer