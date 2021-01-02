import React from 'react'
import { Navbar } from '../ui/Navbar'

import moment from 'moment';
import "moment/locale/es";

import {Calendar,momentLocalizer} from "react-big-calendar";
import { messages } from '../../helpers/calendar-messages-es';
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("es");
const localizer = momentLocalizer(moment);

const  myEventsList =[{
    title: 'cumpleñaos jej',
    start: moment().toDate(),
    end: moment().add(3,"hour").toDate(),
    bgcolor: "#fafafa"

}]



export const CalendarScreen = () => {

    const eventStyleGetter = (event, start,end,isSelected) => {
        const style = {
            backgroundColor:"#367cf7",
            borderRadius: "0px",
            opacity:0.8,
            display: "block",
            color: "white"
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
                events={myEventsList}   
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
            />
        </div>
    )
}
