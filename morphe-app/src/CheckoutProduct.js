import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";



function CheckoutProduct({ id, image, tag, title, price, rating,hideButton }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

<div className='checkoutProduct__info'>
<div className="checkoutProduct__description">
<p className='checkoutProduct__tag'>{tag}</p>
    <p className='checkoutProduct__title'>{title}</p>
    </div>
   
   <div className="checkoutProduct__button">
   {!hideButton && (
    <button onClick={removeFromBasket}>Remove</button>
   )}
    </div>
    
    <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
        <strong>.00</strong>
    </p>
    </div>
        </div>
    )
}

export default CheckoutProduct