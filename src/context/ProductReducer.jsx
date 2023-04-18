const ProductReducer = (state, action) =>{

switch(action.type){

    case "GET_PRODUCT" :
        return {
            ...state,
            Product : action.payload
        }

    default:
        return state
}
}

export default ProductReducer