import React from "react";
import {makeStyles } from '@material-ui/core';

import './messageMarketing.css'

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
  
  export default function MessageMarketing() {
    const classes = useStyles();
  
    return (
    <div className={`${classes.root}`}>
      יש לך חנות ? רוצה ליפתוח אתר מכירות ? <br />
      יש לך עסק או חברה ? <br />
      יש לך עמותה ?
    </div>
    );
}