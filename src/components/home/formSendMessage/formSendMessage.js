import React, { Component } from 'react'
import {Button, TextField, TextareaAutosize, FormControlLabel, Checkbox, Link, Grid, Paper, makeStyles } from '@material-ui/core';

// import PropTypes from "prop-types";

import './formSendMessage.css'

// const HIDDEN_SYMBOL = '❓'

// const Card = ({card, feedback, index, onClick}) => (
//     <div className={`card ${feedback}`} onClick={() => onClick(index)} >
//         <span className="symbol">
//             {feedback === "hidden" ? HIDDEN_SYMBOL : card}
//         </span>
//     </div>
// )

// const FormSignIn = ({classForm, classSubmit}) => (

    // const useStyles = makeStyles((theme) => ({
    //     paper: {
    //         margin: theme.spacing(8, 4),
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //     },
    //     avatar: {
    //         margin: theme.spacing(1),
    //         backgroundColor: theme.palette.secondary.main,
    //     },
    //     form: {
    //         width: '100%', // Fix IE 11 issue.
    //         marginTop: theme.spacing(1),
    //     },
    //     submit: {
    //         margin: theme.spacing(3, 0, 2),
    //     },
    // }));


class FormSendMessage extends Component {

    state = {
        email: '',
        password: '',
        checkbox: false,
        classCheckEmail: 'correctInput',
        classCheckPassword: 'correctInput',
        incorrectField: false
    }
    

    // Arrow fx for binding
    // handleEmailUpdate = (event) => {
    //     const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    //     const classError = event.target.value === '' || !event.target.value.match(mailFormat) ? 'incorrectInput' : 'correctInput'
    //     this.setState({ email: event.target.value.toLowerCase(), classCheckEmail: classError })
    //     console.log(event.target.value)
    // }

    // // Arrow fx for binding
    // handlePasswordUpdate = (event) => {
    //     let classError = event.target.value === '' || event.target.value.length < 8 ? 'incorrectInput' : 'correctInput'
    //     this.setState({ password: event.target.value, classCheckPassword: classError })
    //     console.log(event.target.value)
    // }
    
    // // Arrow fx for binding
    // handleCheckboxUpdate = (event) => {
    //     this.setState({ checkbox: event.target.checked })
    //     console.log(event.target.checked)
    // }

    // // Arrow fx for binding
    // handleSubmit = async (event) => {
    //     event.preventDefault()
    //     if (this.state.classCheckEmail === 'correctInput' && this.state.classCheckPassword ==='correctInput') {
    //         try{
    //             let formData = new FormData();
    //             formData.append('data', {...this.state});
    //             console.log(formData);
    //             const response = await fetch('http://localhost:3001/signin', {
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //                 },
    //                 method: 'POST',
    //                 body: formData
    //             });
    //             const data = response.json();
    //             console.log(data);
    //         } catch(err) {
    //             console.log(err);
    //         }
    //     } else {
    //         this.setState({ incorrectField: true })
    //     }
    // }
    

    render () {
        // const { classForm, classSubmit} = this.props.classes
        // const incorrectField = this.state.incorrectField
        return (
            <Paper
            component="form"
            elevation={6}
            className="form-message" 
            // onSubmit={this.handleSubmit}
            >
                {/* {incorrectField && <p>
                    נא למלאות את השדות לפי הנדרש
                </p>} */}
                
                <TextField
                    variant="outlined"
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="כתובת אימייל"
                    name="email"
                    autoComplete="email"
                    // value={this.state.email}
                    className={this.state.classCheckEmail}
                    // onChange={this.handleEmailUpdate}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    size="small"
                    fullWidth
                    type="tel"
                    id="tel"
                    label="טלפון"
                    name="tel"
                    autoComplete="tel"
                    // value={this.state.email}
                    // className={this.state.classCheckEmail}
                    // onChange={this.handleEmailUpdate}
                />
                <TextField
                    multiline
                    rows="5"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    name="message"
                    label="הודעה"
                    type="text"
                    id="message"
                    autoComplete="message"
                    // value={this.state.password}
                    className={this.state.classCheckPassword}
                    // onChange={this.handlePasswordUpdate}
                />
                
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="button-send-message"
                >
                    שלח
                </Button>
            </Paper>
        )
    }
}


// Card.protoTypes = {
//     card: PropTypes.string.isRequired,
//     feedback: PropTypes.oneOf([
//         'visible',
//         'hidden',
//         'justMatched',
//         'jusMismatched'
//     ]).isRequired,
//     index: PropTypes.number.isRequired,
//     onClick: PropTypes.func.isRequired
// }

export default FormSendMessage