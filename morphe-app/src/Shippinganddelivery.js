import React from "react";
import "./Shippinganddelivery.css";
export default function Shippinganddelivery() {
    return (
        <div className="Shipping">
            <div className="shipping__container">
            <div className="main__heading"><h1>SHIPPING AND DELIVERY</h1></div>
            <div className="shipping__details">
            <p>Most in-stock items ship within 24 hours of ordering; however, <i>during special events order processing can take 2-7 business days</i>. When your order ships, you’ll get an email with a tracking link. Tracking information can take 24-48 hours to update.</p>
            <br/>
            <p>For domestic orders we offer FREE Standard shipping at $60.</p>
            <p>Please note that we do not ship on Saturdays, Sundays or US nationally observed holidays.</p>
            <br/>
            <p><li>Orders shipped to Hawaii and Alaska on Standard shipping have an estimated 5-10 business day delivery period.
            </li><li>Orders shipped to Military Bases or to Puerto Rico have an estimated 10-15 business day delivery period. </li>
            </p>
            <h3>SOME ITEMS CAN ONLY BE SHIPPED GROUND</h3>
            <p>If your order contains a hazmat item (fragrance, pressurized spray cans, etc.), it must ship ground Standard shipping. We regret that we are unable to ship hazmat items to Hawaii, Alaska, Puerto Rico, or internationally.</p>
            
            <h3>INTERNATIONAL SHIPPING</h3>
            <p>International orders ship via Landmark with a 10-14 business day delivery period from the time of shipment.</p>
            <br/>
            <p>
            If you are outside the U.S. and choose USPS as your shipping method, remember that your order stops tracking after the package leaves the U.S. and may indicate a delivered status at that time.
            </p>            
            </div>
            
            </div>
            
        </div>
    );
}