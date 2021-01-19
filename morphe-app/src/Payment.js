import React, { useState } from 'react';
import ShippingProduct from "./Shippingproduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import {useHistory} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
function Payment(props)
{
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phone, setPhone] = useState('');

    const history=useHistory();
    const [{ basket,user }, dispatch] = useStateValue();
    
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
                   <div className="navigation">
                     <div className="payment__navigation">
                       <a className="nav__list" href="/checkout">Cart</a>
                       <p>  </p>
                       <a className="nav__list" href="/payment">Information</a>
                       </div>
                   </div>
                    <div className="payment__title">
                        <h2>Contact Information</h2>
                    </div>
                    <div className="payment__email">
                    <input className="input" type="text" value={user?.email}  placeholder="Email"/>
                    </div>
                    <div className="payment__title">
                        <h2>Shipping Address</h2>
                        </div>
                        <div className="payment__info">
                        <form>
                          <div className="name__field">
                        <div className="input__field1">
                          <input
          type="text"
          placeholder="First Name"
          className="input"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          
        />
               </div>           
        
       
      
      <div className="input__field2">
        <input
          type="text"
          className="input"
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </div>
      </div>
      <div className="input__field">
        <input
          type="text"
          className="input"
          placeholder="Address"
          value={address}
          onChange={event => setAddress(event.target.value)}
        />
      </div>
      <div className="input__field">
        <input
          type="text"
          className="input"
          placeholder="Apartment, suite, etc. (optional)"
          value={apartment}
          onChange={event => setApartment(event.target.value)}
        />
      </div>
      <div className="input__field">
        <input
          type="text"
          className="input"
          placeholder="City"
          value={city}
          onChange={event => setCity(event.target.value)}
        />
      </div>



      <div className="name__field">
                        <div className="input__field1">
                          <input
          type="text"
          placeholder="Country/ Region"
          className="input"
          value={country}
          onChange={event => setCountry(event.target.value)}/>
               </div>           
        
       
      
      <div className="input__field2">
        <input
          type="text"
          className="input"
          placeholder="Postcode"
          value={postcode}
          onChange={event => setPostcode(event.target.value)}
        />
      </div>
      
      </div>
      <div className="input__field">
        <input
          type="text"
          className="input"
          placeholder="Phone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
      </div>
      <div className="button_payment">
      <button type="submit" className="btn__continue" onClick={ e => history.push('/shipping')}>CONTINUE TO SHIPPING</button>
      </div>
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
                            <h5 className="price__value">Calculated at next step</h5>
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
                            <h5 className="price__value">{value}</h5>
                            </div>
                         
                        )
                      } 
        decimalScale={2}
        value={(getBasketTotal(basket))+(getBasketTotal(basket)* (8.25/100))} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

      />




                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment

