import React, { Component } from 'react'
// import image_developement from '../../images/website-html-code-browser-view-printed-on-white-paper-closeup-view.jpg'
// import image_developement from '../../images/working-on-code.jpg'
import image_developement from '../../images/coding-man-l.jpg'
import image_serveur from '../../images/serveur.png'
import { Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import Header from '../header/header'
import './services.css'


// const SIDE = 6
// const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
// const VISUAL_PAUSE_MSECS = 750

class Services extends Component {

    // state = {
    //   cards: this.generateCards(),
    //   currentPair: [],
    //   guesses: 0,
    //   hallOfFame: null,
    //   matchedCardIndices: [],
    // }

    componentDidMount() {
        document.title = 'שירותים - NSD'
    }

  

    render() {
        // const { cards, guesses, hallOfFame, matchedCardIndices } = this.state
        // const won = matchedCardIndices.length === cards.length
        return (
            <>
            <Header />
            <section>
            <Container>
                <Grid className="flex-services max-wid800"
                    container
                    spacing={3}
                    direction="row-reverse"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12} md={6} className="md-ta-l sx-ta-c">
                        {/* <div> */}
                            <img className="img_services" src={image_developement} alt="developement" />
                        {/* </div> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h2>
                            פיתוח אתרי אינטרנט ואפליקציות WEB
                        </h2>
                        <p className="fs-20 ta-j">
                            אתרי אינטרנט ואפליקציות WEB דורשים פיתוח ברמת דיוק גבוה
                            <br />
                            <Link>קרא עוד</Link>
                        </p>
                    </Grid>
                </Grid>

                <Grid className="flex-services max-wid800"
                    container
                    spacing={3}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12} md={6} className="sx-ta-c">
                        {/* <div> */}
                            <img className="img_services" src={image_serveur} alt="serveur" />
                        {/* </div> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h2>
                            רכישת דומיין
                        </h2>
                        <p className="fs-20 ta-j">
                            דומיין הוא השם של האתר המופיע בשורת הכתובת של הדפדפן.
                            <br />
                            בחירת שם הדומיין צורך חשיבה. הוא משפיע גם על הגולשים וגם על חשיפה במנועי חיפוש כמו גוגל.
                            <br />
                            אצלינו, רכישת הדומיין מתבצעת על שם הלקוח, מה שנותן חופשיות ללקוח במידה והוא ירצה לתחזק את האתר שלו מאוחר יותר במקום אחר.
                            <br />
                            כאן אפשר להשיג את הסיומות הגדולות הבינלאומיות כמו <span dir="ltr">.com, .co.il, .fr, .online</span> ועוד ...
                            <br />
                            <Link>קרא עוד</Link>
                        </p>
                    </Grid>
                </Grid>

                <Grid className="flex-services max-wid800"
                    container
                    spacing={3}
                    direction="row-reverse"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12} md={6} className="md-ta-l sx-ta-c">
                        {/* <div> */}
                            <img className="img_services" src={image_serveur} alt="serveur" />
                        {/* </div> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h2>
                            שירותי איחסון
                        </h2>
                        <p className="fs-20 ta-j">
                            שרתים <br /> VPS
                            <br />
                            <Link>קרא עוד</Link>
                        </p>
                    </Grid>
                </Grid>
            </Container>
            </section>
            </>
        )
    }
}

export default Services




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
