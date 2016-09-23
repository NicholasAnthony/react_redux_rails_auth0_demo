import React, { Component, PropTypes as T } from 'react'
import {ButtonToolbar, Button, Label} from 'react-bootstrap'
// import Messages from '../../components/Messages/Messages'

export default class GeoLocation extends Component {
  constructor(props, context) {
    super(props, context)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleGeoPosition);
    }
  }

  state = {
    lat: null,
    lng: null
  }

  _handleGeoPosition = (position) => {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }

  render() {
    return (
      <Label bsStyle="info">
        { this.state.lat && this.state.lng &&
          `lat: ${this.state.lat} / lng: ${this.state.lng}` 
        }
      </Label>
    )
  }
}
