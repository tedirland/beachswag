import React, { Component } from 'react';
import Link from 'react-router-dom';

export default class Venue extends Component {
  render() {
    const { id, title, location, rating, pricePerNight, imageUrl } =
      this.props.venue;
    return (
      <div className="vanue col s12">
        <Link to={`/venue/${id}`}>
          <div className="image">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="location-stars">
            <span className="location">{location}</span>
            <span className="rating-right">
              <i class="tiny material-icons">star</i>
              {rating}
            </span>
          </div>
          <div className="title">{title}</div>
          <div className="price-per-night">${pricePerNight}/night</div>
        </Link>
      </div>
    );
  }
}
