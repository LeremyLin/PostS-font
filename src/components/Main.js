import React, {Component} from 'react';
import { Register } from './Register';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Login  from './Login';
import Home from './Home';

class Main extends Component {
    getLogin = () => {
        // Check has Logined or not
        return this.props.isLoggedIn ? <Redirect to="/home"/> : 
        // Login component should get ancestor function and return token back
        <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    } 
    getHome = () => {
        return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;
    }
 
   render() {
       return (
        <div className="main">
            <Switch>
                {/* render use a function whether has logined or not */}
                <Route path="/login" render={this.getLogin}/>
                <Route path="/register" component={Register}/>
                <Route path="/home" render={this.getHome}/>
                <Route render={this.getLogin}/>
            </Switch>
        </div>

       );
   }
}

export default Main;
