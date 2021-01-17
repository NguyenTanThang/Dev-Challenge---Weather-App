import React, { Component } from 'react';

import HomeSide from "../components/partials/HomeSide";
import HomeMain from "../components/partials/HomeMain";
import axios from "axios";

let herokuCors = `https://cors-anywhere.herokuapp.com/`;
let locationURL = `https://www.metaweather.com/api/location/1252431/`;

export default class Home extends Component {

    state = {
        weatherData: ""
    }

    /**/
    async componentDidMount() {
        try {
            const response = await fetch(`${herokuCors}${locationURL}`);
            const weatherData = await response.json();
            console.log(weatherData.consolidated_weather);
            this.setState({
                weatherData: weatherData.consolidated_weather
            })
        } catch (error) {
            console.log(error);
        }
    }
    
/*
   async componentDidMount() {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
            const todos = res.data;
            this.setState({
                weatherData: todos
            })
        } catch (error) {
            console.log(error);
        }
    }
*/

    render() {
        let {weatherData} = this.state;

        if (!weatherData) {
            return (<></>)
        }

        /*
        const {consolidated_weather, title} = weatherData;
        const weatherItem = consolidated_weather[0];
        const weatherList = consolidated_weather;
        */

        /**/
        const title = "Ho Chi Minh City"
        const weatherItem = weatherData[0];
        const weatherList = weatherData;

        return (
            <div className="home">
                <div className="row">
                    {/**/}
                    <HomeSide weatherItem={weatherItem} location={title}/>
                    <HomeMain weatherItem={weatherItem} weatherList={weatherList}/>
                    {/*
                    {weatherData.map(weatherItem => {
                        return <li key={weatherItem.id}>{weatherItem.title}</li>
                    })}
                    */}
                </div>
            </div>
        )
    }
}
