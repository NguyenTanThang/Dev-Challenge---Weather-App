import React, { Component } from 'react';

import InputWithIcon from "./InputWithIcon";
import {Link} from "react-router-dom";
import axios from "axios";

let herokuCors = `https://cors-anywhere.herokuapp.com/`;
let locationURL = `https://www.metaweather.com/api/location/search/?query=`;

class SideNavbar extends Component {

    state = {
        active: false,
        location: "",
        locations: [
            {
                title: "Ho Chi Minh City",
                woeid: 1252431,
            },
            {
                title: "Bangkok",
                woeid: 1225448,
            },
            {
                title: "Phuket",
                woeid: 1226113,
            },
        ]
    }

    componentDidMount() {
        const {active} = this.props;

        this.setState({
            active
        })
    }

    onChangeActive = () => {
        this.setState({
            active: !this.state.active
        })
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSearchLocation = async (e) => {
        e.preventDefault()
        const {location} = this.state;
        if (!location) {
            return this.setState({
                locations: [
                    {
                        title: "Ho Chi Minh City",
                        woeid: 1252431,
                    },
                    {
                        title: "Bangkok",
                        woeid: 1225448,
                    },
                    {
                        title: "Phuket",
                        woeid: 1226113,
                    },
                ]
            })
        }
        const res = await axios.get(`${herokuCors}${locationURL}${location}`);
        let locations = res.data;
        this.setState({
            locations
        })
    }

    renderLocations = () => {
        const {locations} = this.state;


        return locations.map(locationItem => {
            const {woeid, title} = locationItem;
            return (
                <li key={woeid}>
                    <Link to={`/locations/${woeid}`} target="_blank">
                        <p>{title}</p>
                        <span className="material-icons">
                            keyboard_arrow_right
                        </span>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const {onChangeActive, onChangeInput, renderLocations, onSearchLocation} = this;
        const {location, active} = this.state;

        const activeClass = active ? "active" : "";

        return (
            <div className='side-nav'>
                <button className="btn btn--grey" onClick={onChangeActive}>
                    Search for places
                </button>
                <div className={`side-nav__main ${activeClass}`}>
                    <div className="side-nav-main__close" onClick={onChangeActive}>
                        <span className="material-icons">
                            close
                        </span>
                    </div>

                    <form id="side-nav-form" className="side-nav__form" onSubmit={onSearchLocation}>
                        <div className="row">
                            <div className="form-group">
                                <InputWithIcon id="location" name="location" placeholder="search location" value={location} onChange={onChangeInput} icon="search"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn--primary  btn--block">Search</button>
                            </div>
                        </div>
                    </form>

                    <div className="side-nav__locations">
                        <ul>
                            {renderLocations()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideNavbar;
