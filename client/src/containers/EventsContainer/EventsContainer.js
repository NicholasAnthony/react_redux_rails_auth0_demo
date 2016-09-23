import React, { Component } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap'

export default class extends Component {
  render() {
    console.log(" 🔔 containers/EventsContainer/EventsContainer.js PROPS: ", this.props)
    return (
      <div>
        <h1>Events Container</h1>
        <Button bsStyle="primary" onClick={this.props.authLogin}>Login 2</Button>
      </div>
    )
  }
}
