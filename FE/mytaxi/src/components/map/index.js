import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import carGreen from '../../assets/car-green.png';
import carRed from '../../assets/car-red.png';

const mapStyles = {
  width: '50vw',
  height: '70vh'
};

export class MapContainer extends Component {

  renderMarker() {
    const { mytaxi, vehicules, google, car2go } = this.props;
    this.bounds = new google.maps.LatLngBounds()

      return vehicules.map(vehicule => {
        let icon, lat, lng;
        if (mytaxi) {
          lat = vehicule.coordinate.latitude;
          lng = vehicule.coordinate.longitude;
          icon = carRed;
          if (vehicule.state === 'ACTIVE'){
            icon = carGreen;
          }
        }

        if(car2go){
          lat = vehicule.coordinates[1];
          lng = vehicule.coordinates[0];
          icon = carRed;
          if(vehicule.exterior === 'GOOD' && vehicule.interior === 'GOOD'){
            icon = carGreen;
          }
        }

        return (
          <Marker
            title={`${vehicule.id}`}
            key={`ve-${vehicule.id}`}
            position={{ lat, lng }}
            icon={{
              url: icon,
              anchor: new google.maps.Point(32,32),
              scaledSize: new google.maps.Size(30,30)
            }} />
        )
      });
    
  }

  render() {
    const { lat, lng, zoom } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={zoom}
        style={mapStyles}
        initialCenter={{ lat, lng }}
        ref={(ref) => this.map = ref}
      >
        {this.renderMarker()}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEaeR-lROFBYDyLjO1PJPaIo8yrMtwej4'
})(MapContainer);