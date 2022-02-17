import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { CalendarModal } from "./CalendarModal";
import { CalendarEvent } from "./CalendarEvent";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";

import Navbar from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
import { uiOpenModal } from "../../actions/ui";
import { eventClearActiveEvent, eventSetActive } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";

//CONFIGURA MOMENT EN ESPAÑOL
moment.locale("es");
const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

  const dispatch = useDispatch();

  const {events, activeEvent} = useSelector( state => state.calendar );

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (event) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (event) => {
    dispatch(eventSetActive(event));
  };

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem('lastView', event)
  };

  const onSelectSlot = (event) => {
    dispatch(eventClearActiveEvent());
  }
  

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
    <div className="caledar-screen">
      <Navbar />
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={onViewChange}
          onSelectSlot={onSelectSlot}
          selectable={true}
          view={lastView}
          components={{
            event: CalendarEvent,
          }}
        />
      <AddNewFab/>


      {
       (activeEvent) && <DeleteEventFab/> 
      }
      <CalendarModal/>    
    </div>
  );
};
