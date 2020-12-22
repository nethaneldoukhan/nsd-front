import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css'
// import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';
import Header from '../header/header';
import DomainCheck from './domainCheck/domainCheck';
import Carroussel from './carroussel/carroussel';
import MessageMarketing from './messgeMarketing/messageMarketing';
import DetailsOfServices from './detailsOfServices/detailsOfServices';
import FormSendMessage from './formSendMessage/formSendMessage';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import './home.css'



// const SIDE = 6
// const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
// const VISUAL_PAUSE_MSECS = 750

class Home extends Component {

    // state = {
    //   cards: this.generateCards(),
    //   currentPair: [],
    //   guesses: 0,
    //   hallOfFame: null,
    //   matchedCardIndices: [],
    // }

    componentDidMount() {
        document.title = 'דף הבית - NSD'
    }

  

    render() {
        // const { cards, guesses, hallOfFame, matchedCardIndices } = this.state
        // const won = matchedCardIndices.length === cards.length
        return (
            <>
            <Header />
            <section className="home-section">
                <Container>
                    <h1 className="site-title">
                        כל שירותי ה-WEB והפיתוח במקום אחד
                    </h1>
                    <DomainCheck />
                    <Carroussel />
                    <Grid
                        container
                        spacing={5}
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item md={5}>
                            <MessageMarketing />
                            <DetailsOfServices />
                        </Grid>
                        <Grid item md={4}>
                            <FormSendMessage />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            </>
        )
    }
}

export default Home