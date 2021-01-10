import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'

import moment from 'moment';
import "moment/locale/es";

import {Calendar,momentLocalizer} from "react-big-calendar";
import { messages } from '../../helpers/calendar-messages-es';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, setActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale("es");
const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {
    const {events,activeEvent} = useSelector(state => state.calendar);
    const dispatch = useDispatch();
    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month")

    const onDoubleClick = () =>{
        dispatch(uiOpenModal());
    }
    const onSelectEvent = (e) =>{
        dispatch(setActive(e));
       
    }
    const onViewChange = (e) =>{
        setLastView(e);
        localStorage.setItem("lastView",e);
    }
    const onSelectedSlot=(e)=>{
        dispatch(eventClearActiveEvent());
    }



    const eventStyleGetter = (event, start,end,isSelected) => {
        const style = {
            backgroundColor:"#367cf7",
            borderRadius: "0px",
            opacity:0.8,
            display: "block",
            color: "white",
            }
        return {
            style
        }

    }
    return (
        <div className="calendar-screen">
            <Navbar/>

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
                onSelectSlot={ onSelectedSlot }
                selectable={true}
                view={lastView}
                components={{
                    event:CalendarEvent
                }}
            />
            {(activeEvent) &&
                <DeleteEventFab/>
            }
            <CalendarModal/>           
            <AddNewFab></AddNewFab>
        </div>
    )
}
