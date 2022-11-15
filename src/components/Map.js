import React from 'react';
import './Map.css';

class Map extends React.Component {
  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=${this.props.zoom}&markers=icon:small-red-cutout|${this.props.lat},${this.props.lon}`
    
    return(
      <div id="mapImage">
        <img src={mapURL} alt={this.props.city_name} title={this.props.city_name}/>
      </div>
    )
  };
};

export default Map;
