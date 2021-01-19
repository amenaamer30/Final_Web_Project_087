import React from "react";
import "./Shop.css";
import Product from "./Product";
import {ProductList} from "./ProductList";

function Shop() {
  return (
    <div className="shop">
      <div className="shop__container">
      <div className="shop__row2">
               <h2>
<span className="shop__heading">SHOP NOW</span>
              </h2>
            </div>

<div className="shop__row">
            {ProductList.slice(0, 5).map((data, index) => {
          return (
              <Product
                id={data.id}
                title={data.title}
                tag={data.tag}
                price={data.price}
                image={data.image}
                rating={data.rating}
              />
          );
        })}
</div>

<div className="shop__row">

            {ProductList.slice(5, 10).map((data, index) => {
          return (
              <Product
                id={data.id}
                title={data.title}
                tag={data.tag}
                price={data.price}
                image={data.image}
                rating={data.rating}
              />
          );
        })}
</div>

<div className="shop__row">

            {ProductList.slice(10, 15).map((data, index) => {
          return (
              <Product
                id={data.id}
                title={data.title}
                tag={data.tag}
                price={data.price}
                image={data.image}
                rating={data.rating}
              />
          );
        })}
</div>
      {/*      <div className="shop__row2">
               <h2>
<span className="shop__heading">Shop</span>
              </h2>
            </div>

        <div className="shop__row">


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

        */}


        

        
      </div>
    </div>
  );
}

export default Shop;