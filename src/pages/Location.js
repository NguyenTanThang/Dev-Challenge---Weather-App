import React, { Component } from 'react';

import HomeSide from "../components/partials/HomeSide";
import HomeMain from "../components/partials/HomeMain";
import axios from "axios";

let herokuCors = `https://cors-anywhere.herokuapp.com/`;
let locationURL = `https://www.metaweather.com/api/location/`;

export default class Home extends Component {

    state = {
        weatherData: ""
    }

    async componentDidMount() {
        const {woeid} = this.props.match.params;
        const res = await axios.get(`${herokuCors}${locationURL}${woeid}`);
        const weatherData = res.data;
        this.setState({
            weatherData
        })
    }

    render() {
        const {weatherData} = this.state;

        if (!weatherData) {
            return (<></>)
        }

        const {consolidated_weather, title} = weatherData;
        const weatherItem = consolidated_weather[0];
        const weatherList = consolidated_weather;

        return (
            <div className="home">
                <div className="row">
                    <HomeSide weatherItem={weatherItem} location={title}/>
                    <HomeMain weatherItem={weatherItem} weatherList={weatherList}/>
                </div>
            </div>
        )
    }
}
