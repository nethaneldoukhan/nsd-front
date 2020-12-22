import React, { Component } from 'react'
// import logo from './logo.svg';
// import './contact.css'
import { Link } from 'react-router-dom'



// const SIDE = 6
// const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
// const VISUAL_PAUSE_MSECS = 750

class Contact extends Component {

    // state = {
    //   cards: this.generateCards(),
    //   currentPair: [],
    //   guesses: 0,
    //   hallOfFame: null,
    //   matchedCardIndices: [],
    // }

    componentDidMount() {
        document.title = 'שיחזור סיסמא - NSD'
    }

  

    render() {
        // const { cards, guesses, hallOfFame, matchedCardIndices } = this.state
        // const won = matchedCardIndices.length === cards.length
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <Link to="/">home</Link>
                </header>
            </div>
        )
    }
}

export default Contact




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
