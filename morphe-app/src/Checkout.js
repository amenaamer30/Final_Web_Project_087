import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";

function Checkout() {
    const [{ basket,user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      
      <div className="checkout__left">


<h2 className="checkout__title">YOUR BAG</h2>
<div className="checkout__content">
<h3>Hello, {user?.email}</h3>
<Link to="/">

    <h3>Continue shopping</h3>
</Link>
<p>Spend $80 today for FREE 2-Day Shipping & Free Returns. Sign Up FREE | Sign In</p>
</div>
<div className="checkout__products__list">
{basket.map(item => (
            <CheckoutProduct
              id={item.id}
              tag={item.tag}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
       </div>
        </div>

        <div className="checkout__right">
        <Subtotal/>
      
      </div>
    </div>
  );
}

export default Checkout;