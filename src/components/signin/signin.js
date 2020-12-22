import React, { useEffect } from 'react';
import { Avatar, CssBaseline, Paper, Grid, Typography, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Header from '../header/header';
import FormSignIn from './formSignin/formSignin';

import './signin.css'

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function SignIn() {

    useEffect(() => {
        document.title = 'התחברות - NSD'
    });

    const classes = useStyles();
    return (
        <>
        <Header />
        <section>
            <Grid container className={classes.root}>
                <CssBaseline />
                <Grid className="mar-auto" item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            התחברות
                        </Typography>
                        <FormSignIn classes={classes} />
                    </div>
                </Grid>
            </Grid>
        </section>
        </>
    );
}