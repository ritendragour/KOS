
export const getProduct = async () => {

    var respon = await fetch('https://fakestoreapi.com/products')
    var data = await respon.json()
    return data
}