import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core'
import image_404 from '../../images/404.png'
import Header from '../header/header'
import './noMatch.css'
// import { Link } from 'react-router-dom'



class NoMatch extends Component {

    // state = {
    //   cards: this.generateCards(),
    //   currentPair: [],
    //   guesses: 0,
    //   hallOfFame: null,
    //   matchedCardIndices: [],
    // }

    componentDidMount() {
        document.title = '404'
    }

  

    render() {
        // const { cards, guesses, hallOfFame, matchedCardIndices } = this.state
        // const won = matchedCardIndices.length === cards.length
        return (
            <>
            <Header/>
            <Container>
                <div className="img-404">
                    <img src={image_404} alt="not found" />
                </div>
            </Container>
            </>
        )
    }
}

export default NoMatch
