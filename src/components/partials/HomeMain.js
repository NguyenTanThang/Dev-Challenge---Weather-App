import React, { Component } from 'react';

import WeatherItem from "../weather/WeatherItem";

export default class HomeMain extends Component {

    renderWeatherItems = () => {
        const {weatherList, currentDegree} = this.props;

        return weatherList.map((weatherItem, index) => {
            if (index === 0) {
                return ("");
            }
            return (
                <div className='home-weather-item' key={weatherItem.id}>
                    <WeatherItem weatherItem={weatherItem} currentDegree={currentDegree}/>
                </div>
            )
        })
    }

    renderDegreeButtons = () => {
        const {currentDegree, changeCurrentDegree} = this.props;

        const fButtonClass = currentDegree === "F" ? "active" : "";
        const cButtonClass = currentDegree === "C" ? "active" : "";

        return (
            <>
                <li>
                    <button className={`btn btn--grey btn--rounded ${cButtonClass}`} style={{fontWeight: "bold"}}onClick={() => changeCurrentDegree("C")}>°C</button>
                </li>
                <li>
                    <button className={`btn btn--grey btn--rounded ${fButtonClass}`} style={{fontWeight: "bold"}}onClick={() => changeCurrentDegree("F")}>°F</button>
                </li>
            </>
        )
    }

    render() {
        const {renderDegreeButtons} = this;
        const {weatherItem} = this.props;
        const {air_pressure, wind_direction, wind_speed, humidity, visibility, wind_direction_compass} = weatherItem;

        return (
            <div className="home__main">
                
                <div className="home-main__header">
                    <ul className="home-main-header__temp-list row">
                        {renderDegreeButtons()}
                    </ul>
                </div>

                <div className="home-main__week">
                    <div className="row">
                        {this.renderWeatherItems()}
                    </div>
                </div>
                
                <div className="home-main__today">
                    <h4>Today’s Hightlights </h4>
                    <div className="home-main-today__details">
                        <div className='row'>
                        
                            <div className="home-main-today-details__item wind">
                                <h5>Wind Status</h5>
                                <h2>{Math.round(wind_speed)}<span>mph</span></h2>
                                <div className="wind-direction">
                                    <div className="wind-direction__compass" style={{transform: `rotate(${wind_direction}deg)`}}>
                                        <span className="material-icons">
                                            navigation
                                        </span>
                                    </div>
                                    <p>{wind_direction_compass}</p>
                                </div>
                            </div>

                            <div className="home-main-today-details__item humidity">
                                <h5>Humidity</h5>
                                <h2>{Math.round(humidity)}<span>%</span></h2>
                                <div className="progress-bar">
                                    <div className="progress-bar-0 progress-bar-item">
                                        0
                                    </div>
                                    <div className="progress-bar-50 progress-bar-item">
                                        50
                                    </div>
                                    <div className="progress-bar-100 progress-bar-item">
                                        100
                                    </div>
                                    <div className="progress-bar-percent progress-bar-item">
                                        %
                                    </div>
                                    <div className="progress" style={{width: `${Math.round(humidity)}%`}}></div>
                                </div>
                            </div>

                            <div className="home-main-today-details__item visibility">
                                <h5>Visibility</h5>
                                <h2>{Math.round(visibility)}<span>miles</span></h2>
                            </div>

                            <div className="home-main-today-details__item pressure">
                                <h5>Air Pressure</h5>
                                <h2>{Math.round(air_pressure)}<span>mb</span></h2>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
