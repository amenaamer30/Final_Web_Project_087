import React, { useEffect, useState } from 'react';
import ShippingProduct from "./Shippingproduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import {Link, useHistory} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";

import {CardElement,useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "./axios";
import { db } from "./firebase";

function Shippinginfo(props)
{

  const history=useHistory();
  const [{ basket,user }, dispatch] = useStateValue();

  const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

  

  useEffect(() => {
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/Payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
}, [basket])


console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)


    const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)
          }
      }).then(({ paymentIntent }) => {

        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })

        setSucceeded(true);
        setError(null)
        setProcessing(false)

        dispatch({
          type: 'EMPTY_BASKET'
      })

        history.replace('/orders')
    })
  }
  

  const handleChange = event => {
   setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
}

    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phone, setPhone] = useState('');

  

  
  
  
  



    
    
    
    const onSubmit = () => {
        console.log(firstName,lastName,address,apartment,city,country,postcode,phone);
      }

      

      

    return(

        <div className="payment">
            <div className="payment__container">
                <div className="payment__section1">
                <div className="payment__image">
                  <img src="https://cdn.shopify.com/s/files/1/0737/8455/files/logo2.png?43993"/>
                   </div>
                   
                    <div className="payment__title">
                        <h2>Contact Information</h2>
                    </div>
                    <div className="payment__email">
                    <input className="input" type="text" value={user?.email}  placeholder="Email"/>
                    </div>
                        <div className="payment__title">
                        <h2>Shipping Method</h2>
                    </div>

                    <div className="Shipping__method">
                      <div className="standard__shipping">
                        <div className="standard__delivery__heading"><p>standard delivered in 2-7 business days</p></div>
                        <div className="standard__delivery__price">
                          
                         { ((getBasketTotal(basket))+(getBasketTotal(basket)* (8.25/100)) > 60) ?
                          <p>Free</p>
                          :
                          <p>$5.25</p>
                         }</div>
                         </div>
                         <br/>
                         <div className="standard__shipping__update">
                           <p>We are taking additional COVID-19 precautions to help ensure the safety of our customers and employees.</p>
                           <p>Because of this we’ll need additional time to process and ship your order – currently up to 5 additional business days. Thank you for your support, and your patience during this time.</p>
                         </div>
                         
                    </div>
                    <div className="payment__title">
                        <h2>PAYMENT</h2>
                          </div>
                        <div className="Payment__description">
                        <p>All transactions are secure and encrypted</p>
                        </div>
                        <div className="cash__details">
                        <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='price__processing__container'>
                                    
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                  
                                {error && <div>{error}</div>}
                            </form>
                          
                                </div>
                    
                </div>
                <div className="payment__section2">
                    <div className="payment__items">
                        {basket.map(item => (
                            <ShippingProduct 
                            id={item.id}
                            title={item.title}
                            tag={item.tag}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />

                            
                        ))}
                        </div>
                        <div className="payment__price__container">
                        <CurrencyFormat 
                          renderText={(value) => (
                            <div className="price__tag">
                               <h5 className="price__heading">Subtotal:</h5>
                              <h5 className="price__value">{value}</h5>
                              </div>
                           
                          )
                        }  
        
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

<div className="price__tag">
                             <h5 className="price__heading">Shipping:</h5>
                            <h5 className="price__value"> { ((getBasketTotal(basket))+(getBasketTotal(basket)* (8.25/100)) > 60) ?
                          <p>Free</p>
                          :
                          <p>$5.25</p>
                         }</h5>
                            </div>

        <CurrencyFormat 
                        renderText={(value) => (
                          <div className="price__tag">
                             <h5 className="price__heading">Taxes:</h5>
                            <h5 className="price__value">{value}</h5>
                            </div>
                         
                        )
                      } 
                        
                        
        
        decimalScale={2}
        value={(getBasketTotal(basket)* (8.25/100))} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

      />
</div>
<div className="payment__price__container2">
<CurrencyFormat 
                         renderText={(value) => (
                          <div className="price__tag">
                             <h5 className="price__heading">Total:</h5>
                            <h5 className="price__value">USD  {value}</h5>
                            </div>
                         
                        )
                      } 
        decimalScale={2}
        value=
        { ((getBasketTotal(basket))+(getBasketTotal(basket)* (8.25/100)) > 60) ?
            getBasketTotal(basket)+(getBasketTotal(basket)* (8.25/100))
            :
            getBasketTotal(basket)+(getBasketTotal(basket)* (8.25/100))+5.25
           }
        
        
        

            
            
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

      />




                        
                    </div>
                </div>
            </div>

        </div>
    );
}export default Shippinginfo;