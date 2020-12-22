import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './main'
import Browser from './browser'
// import Navbar from './navBar'
import './App.css'

function App() {
    return (
        <div>
            <Browser />
            <BrowserRouter>
                {/* <Header /> */}
                <Main />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
