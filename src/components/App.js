import React, { Component } from 'react';
import TopBar from './TopBar';
import '../styles/App.css';
import Main from './Main';
import { TOKEN_KEY } from '../constants';

class App extends Component {
  state = {
    isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
  }

  handleLoginSucceed = (token) => {
    // token here is key-value pair
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div className="App">
        <TopBar handleLogout={this.handleLogout}
          isLoggedIn={this.state.isLoggedIn}
        />

        {/* pass two member to the child */}
        <Main
          handleLoginSucceed={this.handleLoginSucceed}
          isLoggedIn={this.state.isLoggedIn}
        />
      </div>
    )
  }
}

export default App;
