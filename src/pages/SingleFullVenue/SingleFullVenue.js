import React, { Component } from 'react';
import axios from 'axios';
import Point from './Point';
import './SingleFullVenue.css';

export default class SingleFullVenue extends Component {
  state = {
    singleVenue: {},
    points: [],
  };
  async componentDidMount() {
    const vid = this.props.match.params.vid;
    const url = `${window.apiHost}/venue/${vid}`;

    const axiosResponse = await axios.get(url);
    const singleVenue = axiosResponse.data;

    const pointsUrl = `${window.apiHost}/points/get`;
    const pointsAxiosResponse = await axios.get(pointsUrl);

    const points = singleVenue.points.split(',').map((point, i) => {
      return (
        <Point
          key={i}
          pointDesc={pointsAxiosResponse.data}
          point={point}
        ></Point>
      );
    });
    this.setState({ singleVenue, points });
  }
  render() {
    console.log(this.state.singleVenue);
    const sv = this.state.singleVenue;

    return (
      <div className="row single-venue">
        <div className="col s12 center">
          <img src={sv.imageUrl} alt={sv.title} />
        </div>
        <div className="col s8 location-details offset-s2">
          <div className="location">{sv.location}</div>
          <div className="title">{sv.title}</div>
          <div className="guests">{sv.guests}</div>

          <div className="divider"></div>

          {this.state.points}
        </div>
      </div>
    );
  }
}
