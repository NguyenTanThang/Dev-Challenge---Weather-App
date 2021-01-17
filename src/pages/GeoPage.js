import React, { Component } from 'react';
import axios from "axios";

let herokuCors = `https://cors-anywhere.herokuapp.com/`;
let geoURL = `https://www.metaweather.com/api/location/search/?lattlong=`;

export default class GeoPage extends Component {

    async componentDidMount() {
        const {longitude, latitude} = this.props.match.params;

        const res = await axios.get(`${herokuCors}${geoURL}${latitude},${longitude}`);

        const closestLocation = res.data[0];

        this.props.history.push(`/locations/${closestLocation.woeid}`)
    }

    render() {
        return (
            <>
            </>
        )
    }
}
