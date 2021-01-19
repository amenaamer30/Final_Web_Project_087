import React from "react";
import "./InStoreServices.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


export default function InStoreServices()
{
    return(
        <div className="services">
            <div className="services__container">
            <div className="service__col-1">
                <h3>IN-STORE SERVICES</h3>
            <p>Grab a Quickie for a lil’ glow-up, take a Masterclass with a pro, or film your own vid. It’s all going down in your local Morphe store.</p>
            </div>
            <div className="service__col-2">
               </div>
            
            <div className="service__col-3">
                <h3>QUICKIE SERVICES</h3>
            <p>Pop in for a Quickie to learn a coveted technique
in just 20 minutes. We'll werk with a look you
started or begin totally fresh.</p>
            </div>
            



            <div className="services__root">
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Paper className="services__paper1"></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="services__paper2"></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="services__paper3"></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Paper className="services__paper4"></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="services__paper5"></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="services__paper6"></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Paper className="services__paper7"></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="services__paper8"></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="services__paper9"></Paper>
        </Grid>
      </Grid>
    </div>


    <div className="service__col-4">
                <h3>MASTERCLASSES</h3>
            <p>Whether you’re a beginner babe or already a pro, this class is your chance to sit down with a master artist—or a special guest host—for demos, tips, expert advice, and exclusive techniques.</p>
            </div>


            </div>
        </div>
    );

}