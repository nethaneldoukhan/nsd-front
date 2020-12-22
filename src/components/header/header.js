import React from "react";
import { Link } from 'react-router-dom'
import {Grid, makeStyles } from '@material-ui/core'
import logo from '../../images/logo.png'
import Navbar from "./navBar/navBar"

import './header.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  export default function Header() {
    const classes = useStyles();
  
    return (
        <header className={classes.root}>
            <Grid
                className="flex-header"
                container
                spacing={3}
                direction="row"
                justify="space-between"
                alignItems="flex-end"
            >
                <Grid item xs={4} md={3}>
                    <Link to="/">
                        {/* <span>.co.il</span> */}
                        <img src={logo} className="logo_site" alt="logo" />
                    </Link>
                </Grid>
                <Grid item xs={8} md={9}>
                    <Navbar />
                </Grid>
            </Grid>
        </header>
    );
}