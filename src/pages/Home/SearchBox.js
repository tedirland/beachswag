import React, { Component } from 'react'
import './SearchBox.css'

export default class SearchBox extends Component {
  state= {
    where:"",
    checkIn: '',
    checkOut: '',
    guests: 1
  }

  changeWhere = (e) => {
    this.setState({where: e.target.value})
  }
  changeCheckIn = (e) => {
    this.setState({checkIn: e.target.value})
  }
  changeCheckOut = (e) => {
    this.setState({checkOut: e.target.value})
  }
  changeGuests = (e) => {
    this.setState({guests: e.target.value})
  }
  render() {
    return (
    <div className='home-search-box col m4'>
      <h1>Find your perfect beach getaway!</h1>
      <form className='search-box-form'>
        <div className='col m12'>
          <label>Where</label>
          <div className='input-field' id='where'>
        <input onChange={this.changeWhere} type='text' placeholder='Anywhere But Here' value={this.state.where}></input>

          </div>
        </div>
        <div className='col m6'>
          <label>Check In</label>
          <div className='input-field' id='checkIn'>
        <input onChange={this.changeCheckIn} type='date' value={this.state.checkIn}></input>

          </div>
        </div>
        <div className='col m6'>
          <label>Check Out</label>
          <div className='input-field' id='check-in'>
        <input onChange={this.changeCheckOut} type='date' value={this.state.checkOut}></input>

          </div>
        </div>
        <div className='col m12'>
          <label>Guests</label>
          <div className='input-field' id='guests'>
        <input onChange={this.changeGuests} type='number' value={this.state.guests}></input>

          </div>
        </div>
        <div className='col m12 submit-btn'>
          <div className='input-field' id='submit-btn'>
            <input className='btn-large waves-effect waves-light red accent-2' type='submit'></input>
          </div>
        </div>
      </form>

    </div>
    )
  }
}
