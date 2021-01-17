import React, { Component } from 'react';
import SideNavbar from "./SideNavbar";
import {withRouter} from "react-router-dom";

import {getWeatherImageItem, convertDateToValid, getLocation} from "../../utils/utils";

class HomeSide extends Component {

    state = {
        geoLocation: ""
    }

    componentDidMount() {
        const thisRightHere = this;

        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            const geoLocation = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }
            thisRightHere.setState({
                geoLocation
            }, () => {
                console.log(thisRightHere.state.geoLocation);
            })
        });
    }

    /*
    onGeoClick = async (e) => {
        const geoLocation = getLocation();
        const {longitude, latitude} = geoLocation;

        const res = await axios.get(`${herokuCors}${geoURL}${latitude},${longitude}`);

        const closestLocation = res.data[0];

        this.props.history.push(`/locations/${closestLocation.woeid}`)
    }
    */

   onGeoClick = (e) => {
        const {geoLocation} = this.state;
        const {longitude, latitude} = geoLocation;

        window.location.replace(`/locations/longitude/${longitude}/latitude/${latitude}`);
    }

    render() {
        const {onGeoClick} = this;
        const {weatherItem, location} = this.props;
        const {weather_state_name, the_temp, applicable_date} = weatherItem; 

        return (
            <div className="home__side-bar">

                <div className="home-side-bar__header">
                    <div className="row">
                        <SideNavbar/>
                        <div className="home-side-bar-header__geo">
                            <button className="btn btn--rounded btn--grey" onClick={onGeoClick}>
                                <span className="material-icons">
                                    gps_fixed
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="home-side-bar__main">
                    <div className="home-side-bar-main__weather-image
                    ">
                        <img src={getWeatherImageItem(weather_state_name).imageURL} alt={weather_state_name} className="img-fluid" />
                    </div>

                    <div className="home-side-bar-main__desc">
                        <div className="home-side-bar-main-desc__temp">
                            <h2>{Math.round(the_temp)}<sub>℃</sub></h2>
                        </div>
                        <div className="home-side-bar-main-desc__state">
                            <h4>{weather_state_name}</h4>
                        </div>
                        <div className="home-side-bar-main-desc__info">
                            <ul>
                                <li>Today</li>
                                <li className="dot">.</li>
                                <li>{convertDateToValid(applicable_date)}</li>
                            </ul>
                            <div className="info__location">
                                <span className="material-icons">
                                    location_on
                                </span>
                                <p>{location || "Hong Kong"}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeSide;