import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: '',
      searchCity: '',
      display_name: '',
      lat: '',
      log: '',
      zoom: 12
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`search: ${this.state.searchCity}`);
    
    // API data
    let key = process.env.REACT_APP_LOCATIONIQ_API_KEY;
    let location = `https://us1.locationiq.com/v1/search?key=${key}&q=${this.state.searchCity}&format=json`;
    
    let locationData = await axios.get(location);

    //save data to state
    console.log('location data:', locationData.data[0]);
    this.setState({
      apiData: locationData.data[0], //remove apiData once required data is determined
      display_name: locationData.data[0].display_name,
      lat: locationData.data[0].lat,
      lon: locationData.data[0].lon
    });
  }

  handleCityInput = (e) => {
    console.log(this.state.searchCity);
    this.setState ({
      searchCity: e.target.value
    });
  }

render() {

  let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=${this.state.zoom}&markers=icon:small-red-cutout|${this.state.lat},${this.state.lon}`

  return (
  <>
    <h1>City Explorer API</h1>
    <form onSubmit={this.handleSubmit}>
      <label>
        Pick a City
        <input type="text" onChange={this.handleCityInput}/>
      </label>
      <button type="submit">Explore!</button>
    </form>
    <h2>{this.state.display_name}</h2>
    <h3>Latitude: {this.state.lat}</h3>
    <h3>Longitude: {this.state.lon}</h3>
    <img src={mapURL} alt={this.state.display_name} title={this.state.display_name}/>
  </>
  );
}

}

export default App;
