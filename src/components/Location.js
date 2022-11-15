import React from 'react';
import './Location.css';

class Location extends React.Component {

  render() {

    return(
      <div id="locationHeader">
        <h2>{this.props.display_name}</h2>
        <h3>Latitude: {this.props.latitude}</h3>
        <h3>Longitude: {this.props.longitude}</h3>
      </div>
    );
  }
}

export default Location;
