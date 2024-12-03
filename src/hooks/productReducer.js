
// types
export const increment = "INCREMENT";
export const decrement = "DECREMENT";
export const removeItem = "REMOVEITEM";


function productsReducer(state , action){

    switch(action.type){

        case increment:
        return alterQuantity(state,action.productId , "increment")

        case decrement:
        return alterQuantity(state,action.productId , "decrement")

        case removeItem:
        return removeProduct(state , action.productId)

        default:
        return state
    }

}

function removeProduct(state , removeItemId){
    const updatedProductList = state.data.filter(product => product.id !== removeItemId);
    return {...state , data:updatedProductList}
}

function alterQuantity(state , productId , operation){
    console.log(state , productId , operation)
    const updatedProductList = state.data.map((item) => {
        if(item.id == productId){
            const newQuantity = operation === "increment" ?
            item.quantity = item.quantity + 1 
            : item.quantity = item.quantity - 1
            // handling situation if quantity goes in negative 
            return {...item , quantity:newQuantity >=1 ? newQuantity : 1}
        }
        return item
    })

    return {...state , data:updatedProductList}
}

export default productsReducer