import { types } from "../types/types";




export const eventAddNew=(event)=>({
    type: types.eventAddNew,
    payload: event
});

export const setActive=(event)=>({
    type: types.eventSEtActive,
    payload: event
});

