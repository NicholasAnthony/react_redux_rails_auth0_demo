import React, { Component } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap'
import Calendar from '../../components/Calendar/Calendar'

export default class extends Component {

  constructor(props) {
    super(props)

    this.state = {
      location: '',
      keywords: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadEvents()
  }

  handleChange(event) {
    this.setState({
      location: this.locationInput.value,
      keywords: this.keywordInput.value
    })
  }

  handleSubmit(event) {
    console.log(`Searching for ${this.state.keywords} in ${this.state.location}...`)
    event.preventDefault()
    this.props.loadEvents(this.state.location, this.state.keywords)
  }

  render() {

    const { events, singleEvent, errorEvents } = this.props

    return (
      <div>
      
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input type="text" ref={(input) => { this.locationInput = input }} value={this.state.location} onChange={this.handleChange} />
          </label>
          <label>
            Keywords:
            <input type="text" ref={(input) => { this.keywordInput = input }} value={this.state.keywords} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h3 className="page-header">Found {events.allEvents.length} Events:</h3>
        <Calendar events={events.allEvents} />
      </div>
    )
  }
}
