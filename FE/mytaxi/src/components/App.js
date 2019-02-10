import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-4">
            <div className="container">
              <Link to="/" className="brand-logo">Mytaxi / Car2go</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/mytaxi" >Mytaxi</Link></li>
                <li><Link to="/car2go" >Car2go</Link></li>
              </ul>
            </div>

          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
