import React from "react"
import "./Sweetoasis.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from "./Product";


export default function Sweetoasis()
{
    return(
        <div className="sweetoasis">
            <div className="container">
            <div className="sweetoasis__col-1">
                <h1>ESCAPE WITH ILUVSARAHII</h1>
                <h3>NEW SWEET OASIS COLLECTION</h3>
            <p>Get away from it all with this collection of
sunset shades and glam brushes.</p>
            </div>


            <div className="sweetoasis__root">
      <Grid container spacing={2}>
        <Grid item xs={4} sm={1.5}>
          <Paper className="paper"><img alt="morphe" src="https://cdn.shopify.com/s/files/1/0737/8455/files/ContentBlock_SweetOasis2_250x.jpg?v=1610577332"/></Paper>
        </Grid>
        <Grid item xs={2} sm={1.5}>
          <Paper className="paper1"><Product 
                id="15"
                title='35S SWEET OASIS' 
                tag="NEW" 
                price={25} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/MORPHE__0000_SweetOasis_Palette_Stylized_large.jpg?v=1610394341" 
                rating={5}
                
                />
                </Paper>
        </Grid>
        <Grid item xs={2} sm={1.5}>
          <Paper className="paper1"><Product 
                id="16"
                title='SWEET OASIS' 
                tag="NEW" 
                price={20} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/MORPHE_SweetOasis_6PC_Brushes_Stylized.jpg?v=1610394328" 
                rating={4}
                
                />
</Paper>
        </Grid>
        <Grid item xs={4} sm={1.5}>
          <Paper className="paper"><img alt="morphe" src="https://cdn.shopify.com/s/files/1/0737/8455/files/ContentBlock_SweetOasis1_250x.jpg?v=1610577107"/></Paper>
        </Grid>
      </Grid>
    </div>



    <div className="sweetoasis__root">
      <Grid container spacing={2}>
        <Grid item xs={4} sm={1.5}>
          <Paper className="paper"><img alt="morphe" src="https://cdn.shopify.com/s/files/1/0737/8455/files/ContentBlock_SweetOasis2_250x.jpg?v=1610577332"/></Paper>
        </Grid>
        <Grid item xs={2} sm={1.5}>
          <Paper className="paper1"><Product 
                id="17"
                title='SWEET OASIS MINI LIP GLOSS TRIO' 
                tag="NEW" 
                price={16} 
                image="https://cdn.shopify.com/s/files/1/0737/8455/products/MORPHE__0001_SweetOasis_LipTrio_Stylized.jpg?v=1610394331" 
                rating={5}
                
                />
                </Paper>
        </Grid>

       
       
      </Grid>
    </div>

    <div className="sweetoasis__col-2">
                <h1>YOUR GETAWAY CREW</h1>
                <p>Sweep up the entire Sweet Oasis Collection
for one great price.
Artistry Palette
Mini Lip Gloss Trio
6-Piece Eye Brush Set</p>
            </div>





            </div>
        </div>
    );
}