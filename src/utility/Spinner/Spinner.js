import React, { Component } from 'react'
import './Spinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSpinner)

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner-wrapper'>
           <FontAwesomeIcon icon='spinner' size='5x' spin/>
      </div>
    )
  }
}
