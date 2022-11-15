import React from 'react';
import './Map.css';

class Map extends React.Component {
  render() {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=${this.props.zoom}&markers=icon:small-red-cutout|${this.props.lat},${this.props.lon}`
    
    return(
      this.props.city_name.length < 1 ?
      <div id="mapImage">
         <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/World_map_with_equator.jpg" alt="map of the world" title="map on error or blank"/>
      </div> :
      <div id="mapImage">
        <img src={mapURL} alt={this.props.city_name} title={this.props.city_name}/>
      </div>
    )
  };
};

export default Map;
