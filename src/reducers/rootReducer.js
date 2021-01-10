import {combineReducers} from "redux"
import { CalendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui:uiReducer,
    calendar: CalendarReducer
    // auth
    // calendar
});

