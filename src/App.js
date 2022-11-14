import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  // API data
  
  //save data to state
}
//handleCityInput = (e) => {}
//handleCitySubmit = (e) => {}

render() {
  return (
  <>
    <h1>City Explorer</h1>
    <form onSumbit={this.handleSubmit}>
      <button type="submit">Submit City</button>
    </form>
  </>
  );
}




}

export default App;
