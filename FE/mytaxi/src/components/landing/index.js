import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './landing.css';
import mytaxiLogo from '../../assets/mytaxi_logo.png';
import car2goLogo from '../../assets/car2go_logo.svg';


class Landing extends Component {

  componentDidMount() {
    document.title = "Landing";
  }

  render() {
    return (
      <div className="container">
        <h3>React Mytaxi / Car2go test</h3>
        <p></p>
        <hr></hr>

        <div className="row">
          <div className="col s6 m6">
            <Link to="/mytaxi" >
              <div className="card">
                <div className="card-image">
                  <img alt="mytaxi" src={mytaxiLogo} />
                </div>
                <div className="card-content">
                  <p>Go to a table view and map view for Mytaxi</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col s6 m6">
            <Link to="/car2go" >
              <div className="card">
                <div className="card-image">
                  <img alt="car2go" src={car2goLogo} />
                </div>
                <div className="card-content">
                  <p>Go to a table view and map view for Car2go</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}



export default Landing;