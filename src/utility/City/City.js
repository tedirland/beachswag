import React, { Component } from 'react';
import './City.css';

export default class City extends Component {
  render() {
    console.log(this.props.city);
    const { cityName, image, price } = this.props.city;
    return (
      <div className="city col s12">
        <div className="image">
          <img src={image} alt={cityName} />
        </div>

        <div className="city-name">{cityName}</div>
        <div className="price">${price}/night average</div>
      </div>
    );
  }
}
