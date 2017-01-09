import React, { Component } from 'react';
// import $ from "jquery"

export default class Calendar extends Component {
  componentDidMount() {
  }

  componentDidUpdate() {
    // if ( this.props.events.length > 0) {
    //   this.initializeCalendar(this.props)
    // }
  }
  
  componentWillUnmount() {
    // const { calendar } = this.refs;
    // $(calendar).fullCalendar('destroy');
  }
  
  initializeCalendar = () => {
    
    // const { calendar } = this.refs;

    // $(calendar).fullCalendar({

    //   events: this.props.events,

    //   header: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'listDay,listWeek,month'
    //   },
    
    //   // customize the button names,
    //   // otherwise they'd all just say "list"
    //   views: {
    //     listDay: { buttonText: 'list day' },
    //     listWeek: { buttonText: 'list week' }
    //   },

    //   defaultView: 'listWeek',
    //   defaultDate: '2016-09-12',
    //   navLinks: true, // can click day/week names to navigate views
    //   editable: true,
    //   eventLimit: true, // allow "more" link when too many events
    // })
    
  }

  render() {
    return (
      <div>
        { this.props.events.length > 0 ? (
          this.props.events.map((event, i) =>
            <div key={i}>
              {event.title} : {event.start}
            </div>
          )
        ) : (
          <img src="http://www.bba-reman.com/images/fbloader.gif" role="presentation" />
        )}
      </div>
    )
  }  
}
  