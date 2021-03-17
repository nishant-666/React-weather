import React from "react";
import {
  List
} from "@material-ui/core";
import moment from 'moment';
import './styles.css';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Forecast(props, {weatherData}) {

  const WeatherIcon = styled.div`
  color: whitesmoke;
`;

  const { forecast } = props;

  console.log("Forecast", forecast);

  const results = forecast.map((item, index) => {

    let weatherIcon = null;

    if (item.description === 'Thunderstorm') {
      weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    }else if (item.description === 'Drizzle') {
      weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (item.description === 'Rain') {
      weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (item.description === 'Snow') {
      weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (item.description === 'Clear') {
      weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (item.description === 'Clouds') {
      weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
      weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }

    return (
      <div key={index} className="forecast">
        <div className="flex-forecast">
        <p>{moment(item.dt_txt).format("dddd")}</p>
      
        <WeatherIcon style={{fontSize:25,marginTop:4}}>{weatherIcon}</WeatherIcon>

        <p>
          {item.temperature} &deg;C
        </p>
        </div>
      </div>
    )
  })
  
  return(
    <div>
      <List aria-label="forecast data">{results}</List>
    </div>
  );
  
}