import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {  

  const [{basket,user}, dispatch] = useStateValue();


  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.shopify.com/s/files/1/0737/8455/files/MBX_Red_Logo_500x.png?v=1602777812" />
      </Link>
      

      
      <div className="header__nav">
        <Link to="/shop">
          <div className="header__option">
            <span className="header__optionLineTwo">Shop</span>
          </div>
          </Link>

        
          <Link to="/New">
          <div className="header__option">
            <span className="header__optionLineTwo">New</span>
          </div>
          </Link>


        <div className="header__option">
          <span className="header__optionLineTwo">Sale</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineTwo">Videos</span>
        </div>
        </div>
        

        <div className="header__nav2">

<Link to='/orders'>
        <div className="header__optionSearch">
            <h4>Orders</h4>
            </div>
            </Link>

          <Link to={!user && "/login"}>
            <div onClick={handleAuthenticaton}
            className="header__optionLogin">
              
              <span className="sign">
                {user?  'Sign Out' : 'Sign In' }
              </span>
            <PersonOutlineIcon />
            </div>
            </Link>

            <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
          </Link>




          </div>
        
      
    </div> 
  );
}

export default Header;