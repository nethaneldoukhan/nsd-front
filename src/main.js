import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Account from './components/account';
import SignIn from './components/signin/signin';
import ForgetPassword from './components/forgetPassword';
import Admin from './components/admin';
import NoMatch from './components/noMatch/noMatch';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/account/:id' component={Account} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/forget_password' component={ForgetPassword} />
            <Route exact path='/admin' component={Admin} />
            <Route component={NoMatch}/>
        </Switch>
    );
}

export default Main;