import React, { Component, PropTypes as PT } from 'react'

export default class Jedi extends Component {
  static PropTypes = {
    jedi: PT.object
  }
  render() {
    const { jedi } = this.props
    return (
      <div className="col-sm-9">
        { jedi &&
          <div>
            <h2>{jedi.name}</h2>
            <img src={jedi.image} role="presentation" />
          </div>
        }
      </div>
    )
  }
}
