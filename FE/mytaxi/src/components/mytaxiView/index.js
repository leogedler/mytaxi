import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sticky from "react-stickynode";

import mytaxiLogo from '../../assets/mytaxi_logo.png';
import './mytaxi.css'
import * as actions from '../../actions';
import Map from '../map';

class MytaxiTable extends Component {


  componentDidMount() {
    document.title = "Mytaxi view";
    const { fetchMyTaxiVehicules, history } = this.props;
    fetchMyTaxiVehicules((error) => {
      if (error) {
        history.push('/');
      }
    });
  }

  renderList() {
    const { mytaxiVehicules } = this.props;
    if (mytaxiVehicules.length === 0) return;
    let stateClass;
    return mytaxiVehicules.map(vehicule => {
      stateClass = 'redText';
      if (vehicule.state === 'ACTIVE') {
        stateClass = 'greenText';
      }
      return (

        <tr key={`ve-${vehicule.id}`}>
          <td>{vehicule.id}</td>
          <td className={stateClass}>{vehicule.state}</td>
          <td>{vehicule.type}</td>
        </tr>
      )
    })
  }

  filterVehicule = (e) => {
    const { filterMyTaxiVehicules } = this.props;
    filterMyTaxiVehicules(e.target.value);
  }

  render() {
    const { mytaxiVehicules } = this.props;
    return (
      <div className="container">
        <img className="mytaxi_thumb_img" alt="mytaxi" src={mytaxiLogo} />

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
                  <th>State</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {this.renderList()}
              </tbody>
            </table>

          </div>
          <div className="col s7">
            <Sticky enabled={true} top={10} >
              <Map vehicules={mytaxiVehicules} mytaxi zoom={12} lat={53.5532316} lng={10.0031117} />
            </Sticky>
          </div>
        </div>

      </div>
    );
  }

}

const mapStateToProps = ({ mytaxi }) => {
  return { mytaxiVehicules: mytaxi.mytaxiVehicules }
}

export default connect(mapStateToProps, actions)(MytaxiTable)