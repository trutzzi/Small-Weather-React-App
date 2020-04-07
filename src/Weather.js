import React from 'react';
import SimpleExample from './SimpleMap'
function Weather(props) {
  let { weather, coord, main } = props.weather
  return (
    <React.Fragment>
      <div className="grid details">
        <div className="grid__col grid__col--1-of-2 grid__col--xl-1-of-1 grid__col--m-1-of-1 detail1">
          <h3><span className="icon icon-location"></span>{props.weather.name}</h3>
          <p>Showing weather for {props.weather.name}</p>
          <h4>{weather[0].main}</h4>
          <p>{weather[0].description}</p>
          <p>Coord: <br /> Lon {coord.lon} and Lat {coord.lat}</p>
        </div>
        <div className="grid__col grid__col--1-of-2 grid__col--xl-1-of-1 grid__col--m-1-of-1 detail2">
          <h3><span className="icon icon-temp"></span>Temperatures</h3>
          <p>Main {main.temp} <small className="celsius">C</small></p>
          <p>Max {main.temp_max} <small className="celsius">C</small></p>
          <p>Min {main.temp_min}<small className="celsius">C</small> </p>
          <p>Feels like {main.temp_min} <small className="celsius">C</small> </p>
          <p>Humidity {main.humidity}% </p>
        </div>
      </div>
      <SimpleExample zoom={props.zoom} view={props.view} coord={coord} />
    </React.Fragment>
  );
}

export default Weather;