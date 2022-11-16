import React from 'react';

class Weather extends React.Component {

  render() {

    return(
      <div id="weatherForecast">
        <section>
          <h3>3 Day forecast for {this.props.city}</h3>
            <div id='weather'>
              {this.props.weather.map((day, idx) => (
                <article key={idx}>
                  <h4>{day.date}</h4>
                  <p>{day.fullDescription}</p>
                </article>
                ))
              }
            </div>
        </section>
      </div>
    );
  };
};

export default Weather;
