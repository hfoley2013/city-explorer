import React from 'react';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {

  render() {
    return(
      <div id="weatherForecast">
        <section>
          <h3>3 Day Forecast for {this.props.city}</h3>
            <div id='weather'>
              {this.props.weather.map((day, idx) => (
              <WeatherDay
                date={day.date}
                fullDescription={day.fullDescription}
                idx={idx}
                key={idx}/>
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Weather;
