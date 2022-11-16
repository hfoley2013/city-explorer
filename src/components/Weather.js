import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Weather extends React.Component {



  render() {

    return(
      <div id="weatherForecast">
        <div id="showWeatherButton">
          <Button variant="primary" onClick={this.props.handleOpenModal}>Show Forecast</Button>
        </div>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}>
            <Modal.Header closeButton>
              <Modal.Title>3 Day forecast for {this.props.city}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.weather}
            </Modal.Body>
        </Modal>
      </div>
    );
  };
};

export default Weather;
