import React, { Component } from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core';
// import logo from './logo.svg';
// import { Link } from 'react-router-dom'
import './domainCheck.css'



// // const SIDE = 6
// // const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
// // const VISUAL_PAUSE_MSECS = 750

class DomainCheck extends Component {

  state = {
    domainCheck: '',
    classCheckDomain: 'correctInput',
    incorrectField: false
  }

  // Arrow fx for binding
  handleDomainUpdate = (event) => {
    const urlFormat = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    const classError = event.target.value !== '' && !event.target.value.match(urlFormat) ? 'incorrectInput' : 'correctInput'
    this.setState({ domainCheck: event.target.value.toLowerCase(), classCheckDomain: classError })
    console.log(event.target.value)
  }

  // Arrow fx for binding
  handleSubmit = async (event) => {
    event.preventDefault()
    if (this.state.classCheckDomain === 'correctInput') {
        try{
            let formData = new FormData();
            formData.append('data', {...this.state});
            console.log(formData);
            const response = await fetch('http://localhost:8000/domainCheck', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                method: 'GET',
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
  

  render() {
    // const classes = this.props.classes
    const incorrectField = this.state.incorrectField
//     // const { cards, guesses, hallOfFame, matchedCardIndices } = this.state
//     // const won = matchedCardIndices.length === cards.length
    return (
      <Grid
        className="container-checkDomaine"
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={3} xs={12} style={{color: "white", maxWidth: "200px"}}>
          <h2 className="title-checkDomaine">
            בדוק כאן זמינות הדומיין שלך
          </h2>
        </Grid>
        <Grid item md={8} xs={12}>
          <Paper
            component="form"
            elevation={6}
            className="form-domainCheck" 
            // onSubmit={this.handleSubmit}
            >
          <i class="fas fa-globe"></i>
          <TextField
            variant="outlined"
            color="primary"
            margin="normal"
            // fullWidth
            type="text"
            id="domainCheck"
            label="הכנס שם דומיין לבדיקה"
            name="domainCheck"
            autoComplete="domainCheck"
            value={this.state.domainCheck}
            className={`input-root ${this.state.classCheckDomain}`}
            onChange={this.handleDomainUpdate}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="button-send-message"
          >
            בדוק
          </Button>
        </Paper>
        </Grid>
        <Grid item xs={12}>
          {
          // incorrectField && 
          <p>
              נא למלאות את השדות לפי הנדרש
          </p>}
        </Grid>
          
      </Grid>
    )
  }
}

export default DomainCheck