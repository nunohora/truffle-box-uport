import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

export default class App extends Component {

  renderOnlyAuthLinks() {
    return (
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer />
      </span>
    );
  }

  renderOnlyGuestLinks() {
    return (
      <span>
        <LoginButtonContainer />
      </span>
    );
  }

  render() {
    return (
        <div className="App">
          <nav className="navbar pure-menu pure-menu-horizontal">
            <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
            <ul className="pure-menu-list navbar-right">
              {this.renderOnlyGuestLinks()}
              {this.renderOnlyAuthLinks()}
            </ul>
          </nav>
          {this.props.children}
        </div>
      );
    }
}
