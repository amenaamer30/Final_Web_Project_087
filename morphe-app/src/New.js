import React from "react";
import "./New.css";
import Product from "./Product";
import {NewList} from "./NewList.js";

function New() {
  return (
    <div className="new">
      <div className="new__container">
      <div className="new__row2">
               <h2>
<span className="new__heading">NEW ARRIVALS</span>
              </h2>
            </div>

<div className="new__row">
            {NewList.slice(0, 4).map((data, index) => {
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

<div className="new__row">

            {NewList.slice(4, 8).map((data, index) => {
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

<div className="new__row">

            {NewList.slice(8, 12).map((data, index) => {
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

<div className="new__row">

            {NewList.slice(12, 16).map((data, index) => {
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

<div className="new__row">

            {NewList.slice(16, 20).map((data, index) => {
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


        

        
      </div>
    </div>
  );
}

export default New;