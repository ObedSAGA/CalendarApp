import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import Navbar from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
import { CalendarModal } from "./CalendarModal";
import { CalendarEvent } from "./CalendarEvent";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";

//CONFIGURA MOMENT EN ESPAÑOL
moment.locale("es");
const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Cumpleaños del jefe",
    start: moment().toDate(),
    end: moment().add(2, "hour").toDate(),
    bgcolor: "#fafafa",
    notes: "Comprar el pastel",
    user: {
      _id: "123",
      name: "Pedro",
    },
  },
];

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (event) => {
    console.log(event);
  };

  const onSelectEvent = (event) => {
    console.log(event);
  };

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem('lastView', event)
  };
  

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div>
      <Navbar />
      <div className="m-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          messages={messages}
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          view={lastView}
          components={{
            event: CalendarEvent,
          }}
        />
      </div>


      <CalendarModal />    

    </div>
  );
};
