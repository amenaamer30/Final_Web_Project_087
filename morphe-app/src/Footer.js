import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
   return <div className="footer">
       <div className="row1"> 
       <div className="col1">
              <VerifiedUserOutlinedIcon  fontSize="large" className="Verified__logo"/>
              <div className="Verified__text">
                     <h4 className="verification__heading">SATISFACTION GUARENTEED</h4>
              <p><a className="tags" href="/return-policy">You've got 60 days to fall in love</a></p></div>
              </div>
              <div className="col2">
                     <LocalShippingOutlinedIcon fontSize="large" className="Verified__logo" />
                            <div className="Verified__text">
              <h4 className="verification__heading">FREE SHIPPING</h4>
              <p><a className="tags" href="/shipping-terms">On orders over $60</a></p></div>
              </div>
              <div className="col3">
                     <LocationOnOutlinedIcon fontSize="large" className="Verified__logo"/>
              <div className="Verified__text">
              <h4 className="verification__heading">STORE LOCATOR</h4>
              <p>Find a store</p></div></div>
              </div>


<div className="lower_footer">
       <div className="footer__left">
              <h3>Are you on the list?</h3>
              <div className="socialmedia">
                     <a href="https://instagram.com/morphebrushes"className="socialmedia__handles"><InstagramIcon fontSize="large" /></a>
                     <a href="https://twitter.com/morphebrushes" className="socialmedia__handles"><TwitterIcon fontSize="large"/></a>
                     <a href="https://www.pinterest.com/morphebrushes/" className="socialmedia__handles"><PinterestIcon fontSize="large"/></a>
                     <a href="https://www.facebook.com/MorpheBrushesCosmetics/" className="socialmedia__handles"><FacebookIcon fontSize="large"/></a>
                     <a href="https://www.youtube.com/channel/UC2xzcSVv3Tculr8Znpzc5Rg/featured" className="socialmedia__handles"><YouTubeIcon fontSize="large"/></a>
              </div>
       </div>
       <div className="footer__right">
              <div className="footer__col1">
                     <h3>NEED SOME HELP?</h3>
                     <a className="footer_links" href="/FAQ's">FAQs</a>
                     <br/>
                     <a className="footer_links" href="/covid-19-update">COVID-19 Update</a>
                     <br/>
                     <a className="footer_links" href="/shipping-terms">Shipping Info</a>
                     <br/>
                     <a className="footer_links" href="/return-policy">Returns & Exchanges</a>
                     <br/>
                     <a>Email Us</a>
                     <br/>
                     <a>1-877-366-7743</a>
              </div>
              <div className="footer__col2">
                     <h3>MY MORPHE</h3>
                     <a className="footer_links" href="/login">My Account</a>
                     <br/>
                     <a className="footer_links" href="/in-store-services">In-Store Services</a>
              </div>
              <div className="footer__col3">
                     <h3>ABOUT US</h3>
                     <a className="footer_links" href="/about-morphe">About Morphe</a>
<br/>
<a className="footer_links" href="/donations-partnerships">Partnerships</a>
<br/>
<a className="footer_links" href="/authorized-retailers">Authorized Retailers</a>
              </div>
       </div>
</div>

<div className="copyRight">
       <a className="copyRightbar"><CopyrightIcon style={{ fontSize: 15 }} ></CopyrightIcon> 2020 Morphe Brushes .</a>
       <a className="copyRightbar" href="">Terms & Conditions</a>
       <a className="copyRightbar" href="">Privacy Policy</a>
       <a className="copyRightbar" href="">Accessibility</a>
</div>
       </div>;
}
export default Footer;