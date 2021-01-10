import { types } from "../types/types";




export const eventAddNew=(event)=>({
    type: types.eventAddNew,
    payload: event
});

export const setActive=(event)=>({
    type: types.eventSEtActive,
    payload: event
});

export const eventClearActiveEvent = () =>({
    type: types.eventClearActiveNote
});


export const eventUpdated=(event)=>({
    type: types.eventUpdate,
    payload: event
})