import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-4">
        <div className="container">
          <Link to="/" className="brand-logo title_nav">Mytaxi / Car2go</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/mytaxi" >Mytaxi</Link></li>
            <li><Link to="/car2go" >Car2go</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}