import React from 'react';
import "./Shippingproduct.css";
import {useStateValue} from "./StateProvider";

function Shippingproduct({ id, image, tag, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='Shippingproduct'>
            <img className='Shippingproduct__image' src={image} />

<div className='Shippingproduct__info'>
<div className="Shippingproduct__description">
    <p className='Shippingproduct__title'>{title}</p>
    </div>
    
    <p className="Shippingproduct__price">
        <small>$</small>
        <small>{price}</small>
        <small>.00</small>
    </p>
    </div>
        </div>
    )
}

export default Shippingproduct