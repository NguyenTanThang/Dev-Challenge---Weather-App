import React, { Component } from 'react';

import {getWeatherImageItem, convertDateToValid} from "../../utils/utils";

import {convertCtoF} from '../../utils/utils';

export default class WeatherItem extends Component {
    render() {
        const {weatherItem, currentDegree} = this.props;
        const {weather_state_name, min_temp, max_temp, applicable_date} = weatherItem; 

        return (
            <div className="weather-item">
                <div className='weather-item__date'>
                    <p>{convertDateToValid(applicable_date)}</p>
                </div>
                <div className='weather-item__state'>
                    <img src={getWeatherImageItem(weather_state_name).imageURL} alt={weather_state_name} className="img-fluid" />
                </div>
                <div className="weather-item__footer">
                    <div className="weather-item__temp-max">
                        {currentDegree === "F" ? `${convertCtoF(max_temp)}°F` : `${Math.round(max_temp)}°C`}
                    </div>
                    <div className="weather-item__temp-min">
                        {currentDegree === "F" ? `${convertCtoF(min_temp)}°F` : `${Math.round(min_temp)}°C`}
                    </div>
                </div>
            </div>
        )
    }
}
