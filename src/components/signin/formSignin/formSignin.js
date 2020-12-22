import React, { Component } from 'react'
import {Button, TextField, FormControlLabel, Checkbox, Link, Grid } from '@material-ui/core';

// import PropTypes from "prop-types";

import './formSignin.css'

// const HIDDEN_SYMBOL = '❓'

// const Card = ({card, feedback, index, onClick}) => (
//     <div className={`card ${feedback}`} onClick={() => onClick(index)} >
//         <span className="symbol">
//             {feedback === "hidden" ? HIDDEN_SYMBOL : card}
//         </span>
//     </div>
// )

// const FormSignIn = ({classForm, classSubmit}) => (
class FormSignIn extends Component {

    state = {
        email: '',
        password: '',
        checkbox: false,
        classCheckEmail: 'correctInput',
        classCheckPassword: 'correctInput',
        incorrectField: false
    }
    

    // Arrow fx for binding
    handleEmailUpdate = (event) => {
        const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
        const classError = event.target.value === '' || !event.target.value.match(mailFormat) ? 'incorrectInput' : 'correctInput'
        this.setState({ email: event.target.value.toLowerCase(), classCheckEmail: classError })
        console.log(event.target.value)
    }

    // Arrow fx for binding
    handlePasswordUpdate = (event) => {
        let classError = event.target.value === '' || event.target.value.length < 8 ? 'incorrectInput' : 'correctInput'
        this.setState({ password: event.target.value, classCheckPassword: classError })
        console.log(event.target.value)
    }
    
    // Arrow fx for binding
    handleCheckboxUpdate = (event) => {
        this.setState({ checkbox: event.target.checked })
        console.log(event.target.checked)
    }

    // Arrow fx for binding
    handleSubmit = async (event) => {
        event.preventDefault()
        if (this.state.classCheckEmail === 'correctInput' && this.state.classCheckPassword ==='correctInput') {
            try{
                let formData = new FormData();
                formData.append('data', {...this.state});
                console.log(formData);
                const response = await fetch('http://localhost:3001/signin', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    method: 'POST',
                    body: formData
                });
                const data = response.json();
                console.log(data);
            } catch(err) {
                console.log(err);
            }
        } else {
            this.setState({ incorrectField: true })
        }
    }

    // componentDidMount() {
    //     document.title = 'התחברות - NSD'
    // }

    render () {
        const classes = this.props.classes
        const incorrectField = this.state.incorrectField
        return (
            <form className={`form-signin ${classes.form}`} onSubmit={this.handleSubmit}>
                {incorrectField && <p>
                    נא למלאות את השדות לפי הנדרש
                </p>}
                
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="כתובת אימייל"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={this.state.email}
                    className={this.state.classCheckEmail}
                    onChange={this.handleEmailUpdate}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="סיסמא"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    className={this.state.classCheckPassword}
                    onChange={this.handlePasswordUpdate}
                />
                <Grid container>
                    <Grid item xs>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" checked={this.state.checkbox} />}
                            label="זכור אותי"
                            onChange={this.handleCheckboxUpdate}
                        />
                    </Grid>
                    <Grid item>  
                        <Link href="/forget_password" variant="body2">
                            שכחת את הסיסמא ?
                        </Link>
                    </Grid>
                </Grid>
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    התחבר
                </Button>
            </form>
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

export default FormSignIn