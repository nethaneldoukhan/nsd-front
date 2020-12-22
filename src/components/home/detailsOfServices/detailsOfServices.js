import React from "react";
import {makeStyles } from '@material-ui/core';

// import './detailsOfServices.css'

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
  
  export default function DetailsOfServices() {
    const classes = useStyles();
  
    return (
    <div className={`${classes.root}`}>
        - פיתוח אפליקציות WEB <br />
        - רכישת דומיין <br />
        - שרתים
    </div>
    );
}