import { types } from "../types/types";
import moment from "moment";

const initialState = {

    events:[{
        id: new Date().getTime(),
        title: 'cumpleñaos jej',
        start: moment().toDate(),
        end: moment().add(3,"hour").toDate(),
        bgcolor: "#fafafa",
        user:{
            _id: "123",
            name:"isai"
        }
    }
    ],
    activeEvent: null
};

export const CalendarReducer =(state = initialState,action)=>{
    switch (action.type) {
       case types.eventSEtActive:
           return {
               ...state,
               activeEvent:action.payload
           }

       case types.eventAddNew:
           return {
               ...state,
               events: [...state.events, action.payload]
           }
       case types.eventClearActiveNote:
           return {
               ...state,
               activeEvent: null
           }
       case types.eventUpdate:
           return {
               ...state,
               events: state.events.map(
                   e=>(e.id === action.payload.id) ? action.payload : e
               )
           };
        
           case types.eventDelete:
               return {
                   ...state,
                   events: state.events.filter(
                    e=>(e.id !== state.activeEvent.id)
                ),
                activeEvent:null  
               }
            
            
    
        default:
            return state;
    }
}