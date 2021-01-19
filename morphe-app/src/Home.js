import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="Offer">
                <p>LIMITED TIME ONLY</p>
            </div>
            <div class="thumbnail">     
      <img className="home__image"
                src="https://cdn.shopify.com/s/files/1/0737/8455/files/927_Sweet_Oasis_Hero_Dblank_1400x.jpg?v=1610644014" alt=""/>
     <div class="caption">
              <h1>ESCAPE WITH</h1>
              <h1>ILUVSARAHII</h1>
              <h3>NEW SWEET OASIS COLLECTION</h3>
              <div className="morphe">
              <p>Get away from it all with this collection of</p>
<p>sunset shades and glam brushes</p>
              </div>
              <i>Available at morphe.com + Morphe stores</i>
              <br/>
              <br/>
              <a href="/sweet-oasis" className="skincare__shop" >SHOP NOW</a>
          </div>
          </div>

     <div className="Alert">
                <p>COVID-19: Morphe.com remains open while taking additional precautions for our customers and employees. Orders may be delayed.
 <a className="read__more" href="/covid-19-update">Read More</a> .
</p>
            </div>

            <div className="row2">
               <h2>
<span className="heading">JUST FOR YOU</span>
              </h2>
            </div>

        <div className="home__row">
         

                <Product 
                id="1"
                title='MORPHE X MADDIE ZIEGLER THE IMAGINATION PALETTE' 
                tag="BEST SELLER" 
                price={25} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/Morphe_X_Maddie_PDP_Palette_Open_534x500_crop_bottom.jpg?v=1596678008" 
                rating={5}/>

                <Product 
                id="2"
                title='18R FELLING ROSY' 
                tag="ONLINE ONLY" 
                price={18} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/18R_PDP_Shadow_534x500_crop_bottom.jpg?v=1604963215" 
                rating={4}/>

                <Product 
                id="3"
                title='JACLYN HILL PALETTE VOLUME II' 
                tag="BEST SELLER" 
                price={39} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/0004_JH-Volume-II_Palette_Open_534x500_crop_bottom.jpg?v=1582592434"
                rating={5}/>

                <Product 
                id="4"
                title='DECK THE HAUL 13-PIECE MAKEUP & SKINCARE' 
                tag="" 
                price={49} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/865_group_PDP_Stylized_V2_534x500_crop_bottom.jpg?v=1604961080" 
                rating={3}/>

                <Product 
                id="5"
                title='MORPHE X NIKITA' 
                tag="NEW" 
                price={30} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/PDP_MxNikita_1842_1726__0008_Nikita_Palette_Open_PDP_534x500_crop_bottom.jpg?v=1606161114" 
                rating={4}/>

        </div>

        <div className="Alert2">
                <p>SWEET OASIS COLLECTION <strong>COMING SOON</strong> <i>Available 1.14 on morphe.com + Morphe stores</i></p>
            </div>

        <div className="row2">
               <h2>
<span className="heading">BEST SELLERS</span>
              </h2>
            </div>



        <div className="home__row">
        <Product 
                id="3"
                title='JACLYN HILL PALETTE VOLUME II' 
                tag="BEST SELLER" 
                price={39} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/0004_JH-Volume-II_Palette_Open_534x500_crop_bottom.jpg?v=1582592434"
                rating={5}/>

                <Product 
                id="6"
                title='THE JAMES CHARLES BRUSH SET' 
                tag="BEST SELLER" 
                price={149} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/JC_BrushSet_PDP_1_277x259_crop_bottom.jpg?v=1571265794"
                rating={4}/>

                <Product 
                id="7"
                title='CONTINUOUS SETTING MIST' 
                tag="BEST SELLER" 
                price={16} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/Setting_Mist_US_AUS_2_277x259_crop_bottom.jpg?v=1571265681" 
                rating={4}/>

                <Product 
                id="8"
                title='BABE FAVES' 
                tag="BEST SELLER" 
                price={46} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/01_Babe_Faves_Eye_Cropped_PDP_v2_277x259_crop_bottom.jpg?v=1583524090" 
                rating={5}/>

                <Product 
                id="1"
                title='MORPHE X MADDIE ZIEGLER THE IMAGINATION PALETTE' 
                tag="BEST SELLER" 
                price={25} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/Morphe_X_Maddie_PDP_Palette_Open_534x500_crop_bottom.jpg?v=1596678008" 
                rating={5}/>


        </div>

<div className="follow_us">
  <h3>FOLLOW US <a className="hash" href="https://www.instagram.com/morphebrushes">@MORPHEBRUSHES</a> & <a className="hash" href="https://www.instagram.com/morphebrushes">#MORPHEBABE</a></h3>
</div>

<div className="row3">
  <div className="column3">
    <img src="https://static.pxlecdn.com/photos/388002566/original/ba8400d3aa72d7a1d236.jpg"></img>
    <img src="https://static.pxlecdn.com/photos/387996943/original/56737fccf26483f6c714.jpg"/>
    
  </div>
  <div className="column2">
  <img src="https://static.pxlecdn.com/photos/388007665/original/430c87412f70c9a633e5.jpg"/>
    
  </div>
  <div className="column3">
  <img src="https://static.pxlecdn.com/photos/387972269/original/3499639e71e772c1ea53.jpg"/>
    <img src="https://static.pxlecdn.com/photos/387965423/original/bc9fb774555543e01da9.jpg"/>
  </div>
  <div className="column2">
  <img src="https://static.pxlecdn.com/photos/387978650/original/741d25153c1dea50ecfa.jpg"/>
  </div>
</div>

        
 


<div className="morphe__information">
  <div className="morphe__info">
    <p>Morphe offers a complete lineup of cruelty-free makeup and artistry tools that includes brushes, eyeshadow palettes, foundation, concealer, lipstick, highlighter, contour, and so much more. Founded in 2008 among the artists and influencers of Los Angeles, Morphe earned its reputation for a bold approach to makeup that honors individuality and self-expression. Our professional-grade products—like our game-changing 35 eyeshadow palette fam, Fluidity Foundation shades, and brush sets—are made to break the internet, not the bank. Our unparalleled selection spans our influencer collabs, including the James Charles Palette, Jaclyn Hill Artistry Palette, and Bretman Babe in Paradise Highlighter Palette. You can find it all online at morphe.com or in Morphe stores. We got you, Morphe Babe.</p>
  </div>
 </div>
       

        
      </div>
    </div>
  );
}

export default Home;