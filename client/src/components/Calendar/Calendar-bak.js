
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
import 'react-big-calendar/lib/css/react-big-calendar.css'

let formats = {
  dateFormat: "YYYY-MM-DD",

  dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'DD', culture),

  dayRangeHeaderFormat: ({ start, end }, culture, local) =>
    local.format(start, { date: 'short' }, culture) + ' — ' +
    local.format(end, { date: 'short' }, culture)
}

// const Calendar = props => (
//   <div>

//   </div>
// );

// export default Calendar;

export default class Calendar extends Component {
  componentDidMount() {
  }

  componentDidUpdate() {
    // if ( this.props.events.length > 0) {
    //   this.initializeCalendar(this.props)
    // }
  }
  
  // componentWillUnmount() {
  //   const { calendar } = this.refs;
  //   $(calendar).fullCalendar('destroy');
  // }
  
  // initializeCalendar = () => {
    
  //   const { calendar } = this.refs;

  //   $(calendar).fullCalendar({

  //     events: this.props.events,
  //     theme: true,
  //     eventClick: function(event) {
  //         if (event.url) {
  //             window.open(event.url);
  //             return false;
  //         }
  //     },

  //     header: {
  //       left: 'prev,next today',
  //       center: 'title',
  //       right: 'listDay,listWeek,month'
  //     },
    
  //     // customize the button names,
  //     // otherwise they'd all just say "list"
  //     views: {
  //       listDay: { buttonText: 'list day' },
  //       listWeek: { buttonText: 'list week' }
  //     },

  //     defaultView: 'listWeek',
  //     defaultDate: Moment().format("YYYY-MM-DD"),
  //     navLinks: true, // can click day/week names to navigate views
  //     editable: true,
  //     eventLimit: true, // allow "more" link when too many events
  //   })
    
  // }

  render() {
    return (
      <div>
        ()
        <BigCalendar
          events={this.props.events}
          formats={formats}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    )
  }  
}
  