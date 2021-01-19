import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./ControlledAccordian.css";
export default function ControlledAccordions() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="root">
        <div className="faq__container">
            <div className="main__heading"><h1>FAQ</h1>
            <p><strong>Contact us at:</strong> info@morphe.com or 1-877-366-7743</p>
            </div>
      <h3>ORDER STATUS</h3>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="heading">
            WHEN WILL MY ORDER SHIP?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
            With COVID-19, we are following local health mandates and taking
            additional precautions to help ensure the safety of our customers
            and employees, including reduced staffing and extra cleaning of our
            warehouses. This may increase the time it takes to process and ship
            your order—currently up to 5 business days. Additionally, we may not
            be able to offer expedited shipping, including the ShopRunner
            service. We appreciate your patience and understanding.
            <br />
            <br />
            When your order ships, you’ll get an email with a tracking link (it
            can take up to 24-48 hours to update).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="heading">
            HOW CAN I FIND THE STATUS OF MY ORDER?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
            Check the status of a particular order and view your Order History
            on the Order Status tracking page under My Account. Please note that
            the Order History will not be updated until the product(s) have
            shipped.
            <br />
            International Orders: If you used USPS as your shipping method
            (shipping from the U.S. to another country via a 3rd party),
            remember that your order stops tracking after the package leaves the
            U.S. and may indicate being "delivered" at that time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h3>
PLACING AN ORDER</h3>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="heading">
          WHICH PAYMENT METHODS DO YOU ACCEPT?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          We accept major credit cards, PayPal, Venmo, ApplePay, and Afterpay.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="heading">WHAT IS AFTERPAY?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          Promo codes can be applied to your order during checkout, in the Order Summary section. Codes will not apply to discounted Morphe items, some collaboration items, and non-Morphe products. Promo codes have expiration dates. If you have two valid codes you want to use, you'll need to pick a fave—you can only use one at a time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className="heading">IS THERE A PRO DISCOUNT FOR MAKEUP ARTISTS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          Currently, we do not have a pro discount for makeup artists, but we’ll let you know if that happens. The best way to stay tuned? Sign up for our mailing list.          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className="heading">WHERE IS U.S. SALES TAX COLLECTED?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          We collect state sales tax on orders shipped to the following states: Alabama, Arizona, California, Connecticut, Florida, Georgia, Hawaii, Illinois, Indiana, Kentucky, Louisiana, Maryland, Massachusetts, Michigan, Minnesota, Missouri, Nevada, New Jersey, New Mexico, New York, North Carolina, Ohio, Oklahoma, Pennsylvania, South Carolina, Texas, Virginia, Washington, and Wisconsin. This list is subject to change as we open new locations.

Tax is estimated at the time an order is placed and a final calculation of the actual sales tax will be reflected on your order confirmation email.

PLEASE NOTE: during high-traffic events we may use an alternate service to calculate sales tax. If you would like to understand more about the tax you were charged, contact us.
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className="heading">IF AN ITEM IS "OUT OF STOCK" ONLINE, IS IT OUT OF STOCK AT MORPHE STORES?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          Online stock availability does not currently reflect availability at Morphe retail locations. You can find out if a product is by contacting the store nearest you. Please also note that we are unable to accept phone orders for delivery/shipment from stores.
          </Typography>
                  </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className="heading">CAN I CANCEL MY ORDER?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          To serve you better, Morphe will begin to process your order immediately after it has been submitted, and we are unable to change or cancel an order once it has been placed. If there is an issue with your order, call us immediately at 1-877-366-7743.
         </Typography>
         </AccordionDetails>
      </Accordion>
      
      <h3>SHIPPING</h3>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography className="heading">DO YOU OFFER FREE SHIPPING?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">Yes, we offer FREE Standard shipping for U.S. orders over $60 to the continental U.S. Free shipping is based on your order total after promotional discounts have been applied and before shipping charges, taxes, etc.</Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
        >
          <Typography className="heading">DO YOU SHIP TO PO BOXES?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          Yes, we ship to PO Boxes using the Standard shipping method. Selecting 2-Day or Next Day will delay processing and change your shipping method to Standard.
              </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11bh-content"
          id="panel11bh-header"
        >
          <Typography className="heading">WHERE DO YOU SHIP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          We ship to many locations outside of the U.S. Choose your shipping country from the dropdown in the site header or footer.
<br/>
We do not currently ship to the following countries: Bonaire, Congo, Cuba, DRC, Ghana, Iran, Iraq, Kazakhstan, Kyrgyzstan, Libya, Mexico, Nigeria, North Korea, Peru, Qatar, Russia, Somalia, Saudi Arabia, Sint Eustatius and Saba, South Sudan, Sudan, Syria, United Arab Emirates, United States Minor Outlying Islands, Yemen, and Zimbabwe.
              <br/>
          Orders placed in U.S. dollars to ship internationally must have a matching billing and shipping address. If international addresses don’t match on an order that ships from the U.S., your order may be cancelled. Contact us at info@morphe.com with any questions.
          <br/>
Conversion and import fees don’t apply to international orders. However, if you live outside of the US, your financial institution or country of residence may charge additional fees on top of your total, such as conversion or import taxes/customs fees. Morphe can’t credit you for these fees since they come from your financial institution or country. Please call your financial institution or customs office before placing your order to confirm what kind of charges you can expect from them.
              </Typography>
        </AccordionDetails>
      </Accordion>
      
<h3>PRODUCT RELATED</h3>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12bh-content"
          id="panel12bh-header"
        >
          <Typography className="heading">ARE MORPHE PRODUCTS CRUELTY-FREE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          Morphe does not condone animal testing in any way. We do not test any of our products on animals. We also do not test any of our ingredients on animals, nor do we allow our manufacturers to do so on our behalf. Instead, we choose to test drive our products on people (with their permission, of course).              </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13bh-content"
          id="panel13bh-header"
        >
          <Typography className="heading">ARE MORPHE PRODUCTS VEGAN-FRIENDLY?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          A few of our most-loved vegan products include our Fluidity Foundation, Fluidity Concealer, Morphe Highlighters, Mega Matte Lipsticks, and the James Charles Artistry Palette. Some of our products do contain non-vegan ingredients and you can check the ingredient list on every product if you have any concerns. You can also search our vegan collection page.              </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14bh-content"
          id="panel14bh-header"
        >
          <Typography className="heading">ARE MORPHE PRODUCTS GLUTEN-FREE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          We care about your health and safety—allergies are a serious thing. Morphe products are not specifically formulated to be gluten free. If you're wondering what's in a Morphe product, please check out the detailed ingredient list on the product page or product packaging to make sure the product will work for you. Ask your doctor if you have any concerns.              </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15bh-content"
          id="panel15bh-header"
        >
          <Typography className="heading">HOW DO I KNOW IF MY MORPHE PURCHASE IS AUTHENTIC?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          The only way to guarantee authenticity is by purchasing from official Morphe retailers: In the U.S., Morphe products are sold at Morphe.com, Morphe stores, Ulta, Ulta.com, and BDirect Online’s Amazon.com store (only at amazon.com/morphe, no other Amazon sellers are authorized).              </Typography>
        </AccordionDetails>
      </Accordion>
      

<h3>RETURNS & EXCHANGES</h3>

      <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16bh-content"
          id="panel16bh-header"
        >
          <Typography className="heading">MY ITEM ARRIVED DAMAGED. WHAT SHOULD I DO?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          While we do everything we can to prevent this, sometimes an item can be damaged in transit. If you receive a damaged or defective product, you must report this within 30 days of delivery or receipt of order in person. Please contact our Morphe Care Crew at info@morphe.com and provide a photo of the damaged or defective product along with a copy of the packing slip or order number. If the product is deemed defective Morphe will replace the product at no additional charge.
                        </Typography>
        </AccordionDetails>
      </Accordion>
      


      <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel17bh-content"
          id="panel17bh-header"
        >
          <Typography className="heading">HOW DO I MAKE A RETURN?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          Purchases made on our website can be returned for any reason up to 30 days after delivery. Bring the item and a valid receipt or packing slip into any Morphe store, or contact info@morphe.com to start the return process.              </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel18bh-content"
          id="panel18bh-header"
        >
          <Typography className="heading">HELP! I CAN’T FIND MY RETURN SLIP.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          We got you covered. Just email info@morphe.com with your order number and we can help.
              </Typography>
        </AccordionDetails>
      </Accordion>
      
      
      <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel19bh-content"
          id="panel19bh-header"
        >
          <Typography className="heading">I RECENTLY PURCHASED AN ITEM ONLINE AND NOW IT’S DISCOUNTED. CAN I GET THE DISCOUNTED PRICE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          Pricing on the website is subject to change without notice. Orders placed before promotions are not eligible to receive new promotions or discounts. We reserve the right to cancel any order due to unauthorized, altered, or ineligible use of the offer, and to modify or cancel any promotion due unforeseen issues.
              </Typography>
        </AccordionDetails>
      </Accordion>
      
<h3>RETAIL & PARTNERS</h3>

      <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel20bh-content"
          id="panel20bh-header"
        >
          <Typography className="heading">WHERE CAN I FIND MORPHE STORES?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          With COVID-19, we are managing the status of our global stores following the guidance of local governments, the CDC, and WHO. Global store status is below.
          <br/>
          <br/>
          <ul><strong>UK</strong>
              <li>All locations are open.</li>
          </ul>
          <br/>
<ul><strong>US</strong>
<li>
Most US Morphe stores are open. The exceptions are: our Texas locations; Arrowhead Towne Center in Arizona; and indoor mall locations in California.</li>
</ul>
<br/>
<ul><strong>
Canada</strong>
<li>
Our Alberta and Toronto locations are open.
</li>
</ul>
<br/>
<ul><strong>Australia
</strong><li>
All Morphe stores in Australia are closed.
</li>
</ul>              </Typography>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel21bh-content"
          id="panel21bh-header"
        >
          <Typography className="heading">CAN I SELL THE PRODUCTS ON MY OWN SITE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="details">
          We want you to use what you buy, Morphe Babe. By purchasing Morphe products, you agree not to resell or distribute such products for any commercial purposes. We may reject or cancel an order if we have reason to believe that your order is not for your personal use.              </Typography>
        </AccordionDetails>
      </Accordion>     </div>
    </div>
  );
}