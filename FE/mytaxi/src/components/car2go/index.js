import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sticky from "react-stickynode";

import car2goLogo from '../../assets/car2go_logo.svg';
import './car2go.css'
import * as actions from '../../actions';
import Map from '../map';

class Car2goTable extends Component {


  componentDidMount() {
    document.title = "Car2go view";
    const { fetchCar2goVehicules, history } = this.props;
    fetchCar2goVehicules((error) => {
      if (error) {
        history.push('/');
      }
    });
  }

  renderList() {
    const { car2goVehicules } = this.props;
    if (car2goVehicules.length === 0) return;
    let exteriorClass, interiorClass;
    return car2goVehicules.map(vehicule => {
      exteriorClass = 'redText';
      interiorClass = 'redText';
      if (vehicule.exterior === 'GOOD') {
        exteriorClass = 'greenText';
      }
      if (vehicule.interior === 'GOOD') {
        interiorClass = 'greenText';
      }

      return (

        <tr key={`ve-${vehicule.id}`}>
          <td>{vehicule.id}</td>
          <td >{vehicule.engineType}</td>
          <td className={exteriorClass}>{vehicule.exterior}</td>
          <td className={interiorClass}>{vehicule.interior}</td>
          <td>{vehicule.fuel}</td>
        </tr>
      )
    })
  }

  filterVehicule = (e) => {
    const { filterCar2goVehicules } = this.props;
    filterCar2goVehicules(e.target.value);
  }

  render() {
    const { car2goVehicules } = this.props;
    return (
      <div className="container">
        <img className="car2go_thumb_img" alt="mytaxi" src={car2goLogo} />

        <div className="row">

          <div className="row">
            <div className="input-field col s5">
              <input placeholder="ID" id="first_name" type="text" className="validate" onChange={this.filterVehicule} />
              <label htmlFor="first_name">Search by ID</label>
            </div>
          </div>


          <div className="col s5">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Engine</th>
                  <th>Exterior</th>
                  <th>Interior</th>
                  <th>Fuel</th>
                </tr>
              </thead>

              <tbody>
                {this.renderList()}
              </tbody>
            </table>

          </div>
          <div className="col s7">
            <Sticky enabled={true} top={10} >
              <Map vehicules={car2goVehicules} car2go zoom={12} lat={53.59301} lng={10.02526} />
            </Sticky>
          </div>
        </div>

      </div>
    );
  }

}

const mapStateToProps = ({ car2go }) => {
  return { car2goVehicules: car2go.car2goVehicules }
}

export default connect(mapStateToProps, actions)(Car2goTable)