import React from 'react';
import Navbar from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [{
   title: 'Cumpleaños del jefe',
   start: moment().toDate(),
   end: moment().add(2, 'hour').toDate(),
   bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {
  return (
  <div>
      <Navbar/>
      <div className="m-4"> 

      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 }}
      />

      </div>
  </div>
  );
};
