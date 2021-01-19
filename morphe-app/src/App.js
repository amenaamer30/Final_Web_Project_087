import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import COVIDupdate from "./COVIDupdate";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Footer from "./Footer";
import AboutMorphe from "./AboutMorphe";
import ReturnPolicy from "./ReturnPolicy";
import Partnership from "./Partnership";
import Shop from "./Shop";
import Payment from "./Payment";
import Orders from "./Orders";
import Shippinginfo from "./Shippinginfo";import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ControlledAccordions from "./ControlledAccordions";
import Shippinganddelivery from "./Shippinganddelivery";
import InStoreServices from "./InStoreServices";
import AuthorizedRetailers from "./AuthorizedRetailers";
import New from "./New";
import Sweetoasis from "./Sweetoasis";

const promise = loadStripe(
  "pk_test_51I8VwQJIje3I3M7nCVwirTV8EqevaNlkxessWbbP3HNAwLNj6iPdNrUHuvTvYRWv5dw3KKZu66s8oiguhaVPYX6e00gY49GF5X"
);



function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <Router>
  <div className="app">
  <Header/>
      <Switch>
      <Route path="/login">
      <Login/>
        </Route>
      <Route path="/checkout">
      <Checkout />
        </Route>
        <Route path="/payment">
          <Payment/>
       </Route>
       <Route path="/New">
      <New />
      
        </Route>
        <Route path="/sweet-oasis">
  <Sweetoasis/>
</Route>
       <Route path="/orders">
          <Orders/>
          
       </Route>
       <Route path="/in-store-services">
  <InStoreServices/>
</Route>

<Route path="/authorized-retailers">
  <AuthorizedRetailers/>
</Route><Route path="/FAQ's">
  <ControlledAccordions/>
</Route>
<Route path="/shipping-terms">
  <Shippinganddelivery/>
</Route>
       <Route path="/shipping">
        

         <Elements stripe={promise}>
         <Shippinginfo/>
            </Elements>

       </Route>
        <Route path="/covid-19-update">
          <COVIDupdate/>
        </Route>
        

        <Route path="/about-morphe">
          <AboutMorphe/>
        </Route>

        <Route path="/return-policy">
          <ReturnPolicy/>
        </Route>

        <Route path="/donations-partnerships">
          <Partnership/>
        </Route>

        <Route path="/shop">
          <Shop/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>

  </div>
{/* if error put router inside the div */}
</Router>
);
}
export default App;