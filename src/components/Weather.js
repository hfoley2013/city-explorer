import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Weather extends React.Component {

  render() {

    return(
      <div id="weatherForecast">
        <section>
          <h3>3 Day Forecast for {this.props.city}</h3>
            <div id='weather'>
              {this.props.weather.map((day, idx) => (
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                  <Accordion.Item eventKey={idx}>
                    <Accordion.Header>{day.date}</Accordion.Header>
                    <Accordion.Body>{day.fullDescription}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Weather;
