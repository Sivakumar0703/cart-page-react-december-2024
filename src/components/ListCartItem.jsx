import React, { useReducer } from 'react'
import productsReducer, { decrement, increment, removeItem } from '../hooks/productReducer.js'
import productsData from "../data/productsData.json"
import TotalPrice from './TotalPrice.jsx';

const initialState = {
    data:productsData
};

const ListCartItem = () => {
    const [state , dispatch] = useReducer(productsReducer , initialState);

    function handleQuantity(event,productId){
        event.preventDefault();
        // quantity is increased
        if(event.target.innerText === "+"){
            dispatch({type:increment , productId:productId })
        }

        // quantity is reduced
        if(event.target.innerText === "-"){
            dispatch({type:decrement , productId:productId })
        }
    }

    function handleRemoveItem(event,productId){
        event.preventDefault();
        if(productId){
            dispatch({type:removeItem , productId:productId})
        }
    }

  return (

    <div id="cart-list">
        <h1>Your cart items - ( {state.data.length} ) </h1>
    {
        state.data.map(item => (
            <div key={item.id} className='product-information'>
                <div className="product-title product-detail">
                    <div>{item.name}</div>
                    <div className="image-container"> <img src={item.image} alt={item.name} /> </div>
                </div>

                <div className='product-detail'>
                    <span>$ {item.price}</span>
                </div>

                <div className="quantity product-detail">
                    <button data-productid={item.id} onClick={(event) => handleQuantity(event,item.id)} className='btn'> - </button> &nbsp;
                    <span>{item.quantity}</span> &nbsp;
                    <button data-productid={item.id} onClick={(event) => handleQuantity(event,item.id)} className='btn'> + </button>
                </div>

                <div className="amount product-detail">
                    <span>$ {item.quantity * item.price}</span>
                </div>

                <div className='product-detail'>
                    <button className='btn remove-btn' data-productid={item.id} onClick={ (event) => handleRemoveItem(event,item.id)}>remove</button>
                </div>
                
            </div>
        ))
    }

    {/* calculate total price */}

    <TotalPrice state={state} />


   </div>

  )
}

export default ListCartItem